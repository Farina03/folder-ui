import React, { useState, useEffect } from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';

const Folders = ({opt, sortedArray, sorter, parent, folders, setParent, setFolders}) =>{
    const [colorVal, setColorVal] = useState(() => {
        return JSON.parse(localStorage.getItem("colors")) || {Default:"#FFB534"}})

    function handleDelete(opt, v, folders, setFolders, sorter) {
        let x = window.confirm(`Are you sure you want to delete the folder ${folders[v].title}?`)
        if(x) {
            let tempObj = {...folders}
            let deletedInfo = tempObj[v]
            Object.keys(tempObj).map(id => {
                if(tempObj[id].parent === v) {
                    delete tempObj[id]
                }
            })
            let deletedFolderParent = deletedInfo.parent
            if(tempObj[deletedFolderParent]) {
                let newchildarray = []
                newchildarray = tempObj[deletedFolderParent].child.filter(item => item !== v)
                tempObj[deletedFolderParent].child = newchildarray
            }
            delete tempObj[v]
            //localStorage.setItem('folders', JSON.stringify(tempObj))
            setFolders({...tempObj})
            sorter(opt, tempObj)
            //sorter(opt, folders)
        }
    }

    function handleColor(event, setFolders, id) {
        const {value} = event.target
        setColorVal(prevColor => {
            return (
                {...prevColor,
                [id]: value}
            )
        })
        localStorage.setItem("colors", JSON.stringify(colorVal))
        setFolders(item => {
            let tempObj = item[id]
            tempObj.color = value
            return(
                {
                    ...item,
                    [id]: tempObj
                }
            )
        })
    }

    return (
            <div className="folder-outer-div">
                {sortedArray.map((v)=>{
                    let id = v[1]
                    let thisFolder = folders[id];
                    if(thisFolder.parent !== parent) return null;
                    return (
                        <div className='folder-div' key={id}> 
                            <div className="color-div">
                                <select className="colors" id={id} value={colorVal[id] || colorVal.Default} 
                                       onChange={(event) => handleColor(event, setFolders, id)}>
                                    <option value="green">Green</option>
                                    <option value="#5D3587">Purple</option>
                                    <option value="#3887BE">Blue</option>
                                    <option value="#FFB534">Default</option>
                                    <option value="">Choose Color --</option>
                                </select>
                            </div>
                            {/* <div className="delete-div">                                     */}
                                <button className="delete-alert-btn" name={id} 
                                        onClick={() => handleDelete(opt, id, folders, setFolders, sorter)}>Delete</button>
                            {/* </div> */}
                            <div className='folder' onClick={()=>{setParent(id)}}>
                                <FolderIcon style={{fontSize: "60px", color: colorVal[id] || colorVal.Default}} fontSize='large'/>
                            </div>
                            <div className='title'> {thisFolder.title} </div>
                        </div>
                    )
                })}
            </div>
            )
}

export default Folders;

//colorVal[id]