import React, { useState, useEffect } from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';

const Folders = ({parent, folders, setParent, setFolders}) =>{
    const [colorVal, setColorVal] = useState({Default:"#FFB534"})

    function handleDelete(v, folders, setFolders) {
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
                console.log(tempObj, "after")
            }
            delete tempObj[v]
            setFolders({...tempObj})
        }
    }
    function handleColor(event, setFolders, v) {
        const {value} = event.target
        setColorVal(prevColor => {
            return (
                {...prevColor,
                [v]: value}
            )
        })
        setFolders(item => {
            let tempObj = item[v]
            tempObj.color = value
            return(
                {
                    ...item,
                    [v]: tempObj
                }
            )
        })
    }

    return (
            <div>
                {console.log(folders, "initial")}
                <div className="folder-outer-div">
                    {Object.keys(folders).map((v)=>{
                        let thisFolder = folders[v];
                        if(thisFolder.parent !== parent) return null;
                        return (
                            <div className='folder-div' key={v}> 
                                <div className="color-div">
                                    <select id={v} value={colorVal[v] || colorVal.Default} onChange={(event) => handleColor(event, setFolders, v)}>
                                        <option value="green">Green</option>
                                        <option value="#5D3587">Purple</option>
                                        <option value="#3887BE">Blue</option>
                                        <option value="#FFB534">Default</option>
                                    </select>
                                </div>
                                <div className="delete-div">
                                    <button className="delete-alert-btn" name={v} 
                                            onClick={() => handleDelete(v, folders, setFolders)}>Delete</button>
                                </div>
                                <div className='folder' onClick={()=>{setParent(v)}}>
                                        <FolderIcon style={{color: colorVal[v] || colorVal.Default}} fontSize='large'/>
                                </div>
                                <div className='title'> {thisFolder.title} </div>
                            </div>
                        )
                    })}
                </div>
            </div>  
    )
}

export default Folders;