import React, { useState } from 'react'
import './mainpage.css'
import AddButton from './AddButton'
import Folders from './Folders'
import './addbutton.css'
import Path from './Path'

const MainPage = () => {
    const [parent, setParent] = useState(0)  
    const [folderName, setFolderName] = useState("")       
    const [folders, setFolders] = useState({
        // id1: {id: "id1", title: 'Folder 1', parent: 0, child: []},
        // id2: {id: "id2", title: 'Folder 2', parent: 0, child: ['id3']},
        // id3: {id: "id3", title: 'Folder 2.1', parent: 'id2', child: ['id5']},
        // id5: {id: "id5", title: 'Folder 2.1.1', parent: 'id3', child: []},
    });
    //const [currentFolders, setCurrentFolders] = useState({})
    const [selectedOption, setSelectedOption] = useState("asc")
    const [sortedArray, setSortedArray] = useState([])
    
    function handleCreate() {
        if(folderName !== '') {
            function randomId() {
                let randomId = Math.floor(Math.random() * 1000)
                return String(randomId)
            }
            let newId = 'id'+randomId()
            let fd = {...folders};
            parent !== 0 && fd[parent].child.push(newId)
            fd[newId] = {
                id: newId,
                title: folderName,
                parent: parent,
                child: [],
                color: "Default"
            }
            setFolders({...fd})
            sorter(selectedOption, fd)
            setFolderName(""); 
        }
    }
    function handleFolderName(event) {
        setFolderName(event.target.value)
    }
    // function sortedObject(foldersTitleArray) {
    //     let tempObj = {}
    //     foldersTitleArray.map(item => {
    //         tempObj = {...tempObj,
    //                     [item[1]]: folders[item[1]]}
    //         // setCurrentFolders({
    //         //     ...currentFolders,
    //         //     [item[1]]: folders[item[1]]
    //         // })
    //         // return {...tempObj,
    //         //         [item[1]]: folders[item[1]]}
    //     })
    //     console.log(tempObj, "temp")
    //     setCurrentFolders({...tempObj})
    //     console.log(currentFolders, "sorted temp obj")
    // }
    function handleSort(opt, folders, parent) {
        setSelectedOption(opt)
        sorter(opt, folders)
    }
    function sorter(opt, folders) {
        //setSelectedOption(opt)
        let foldersTitleArray = Object.keys(folders).map(item => {
            return [folders[item].title, folders[item].id]           
        })
        //let defaultSortedArray = [...foldersTitleArray]
        //console.log(foldersTitleArray, "before")
        //if(selectedOption === "default") setSortedArray(defaultSortedArray)
        opt === "asc" ? foldersTitleArray.sort() :
        foldersTitleArray.sort().reverse()
        setSortedArray(foldersTitleArray)
        //console.log(foldersTitleArray, "sorted")
        //console.log(opt)
    }
    
    return (
        <div className='main-page'>
            <div className='input-div'>
                <input className='input-field' type='text' value={folderName}
                    onChange={(event) => handleFolderName(event)}
                    onKeyDown={(event) => {
                        if(event.key === "Enter") {handleCreate()}
                    }} 
                    placeholder='Enter folder name'/>
                <AddButton handleClick={handleCreate}/>
            </div>
            <div className='sort-options-div'>
                <select value={selectedOption} onChange={(event) => handleSort(event.target.value, folders, parent)}>
                    {/* <option value="default">Default</option> */}
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </div>
            <div className='folder-div'>
                <Path parent={parent} folders={folders} setParent={setParent} />
                <Folders opt={selectedOption} sortedArray={sortedArray} sorter={sorter} parent={parent} folders={folders} setParent={setParent} 
                        setFolders={setFolders} />
            </div>
        </div>
    )
}

export default MainPage