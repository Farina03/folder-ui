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
    const [currentFolders, setCurrentFolders] = useState({})
    const [selectedOption, setSelectedOption] = useState("default")
    
    function handleCreate() {
        if(folderName !== '') {
            function randomId() {
                let randomId = Math.floor(Math.random() * 1000)
                return String(randomId)
            }
            let newId = 'id'+randomId()
            let fd = {...folders};
            parent !== 0 && fd[parent].child.push(newId)
            setFolders({...fd,
                [newId]: {
                    id: newId,
                    title: folderName,
                    parent: parent,
                    child: [],
                    color: "Default"
                }
            })
            setFolderName(""); 
        }
    }
    function handleFolderName(event) {
        setFolderName(event.target.value)
    }
    function sortedObject(foldersTitleArray) {
        let tempObj = {}
        foldersTitleArray.map(item => {
            tempObj = {...tempObj,
                        [item[1]]: folders[item[1]]}
            // setCurrentFolders({
            //     ...currentFolders,
            //     [item[1]]: folders[item[1]]
            // })
            // return {...tempObj,
            //         [item[1]]: folders[item[1]]}
        })
        console.log(tempObj, "temp")
        setCurrentFolders({...tempObj})
        console.log(currentFolders, "sorted temp obj")
    }
    function sorter(opt, folders, parent) {
        setSelectedOption(opt)
        let foldersTitleArray = []
        // foldersTitleArray = Object.keys(folders).map(item => {
        //     if(folders[item].parent === parent) return [folders[item].title, folders[item].id]
        // })
        Object.keys(folders).map(item => {
            if(folders[item].parent === parent)
                foldersTitleArray = [...foldersTitleArray, [folders[item].title, folders[item].id]]
        })
        //if(selectedOption === "default") console.log(foldersTitleArray)
        opt === "asc" ? foldersTitleArray.sort() :
        foldersTitleArray.sort().reverse()
        sortedObject(foldersTitleArray)
        //.filter(item => folders[item].parent === parent)
        // let foldersTitleArray = []
        // foldersIdArray.forEach(item => {
        //     foldersTitleArray.push(folders[item].title)
        // })
        console.log(foldersTitleArray, opt)
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
                <select value={selectedOption} onChange={(event) => sorter(event.target.value, folders, parent)}>
                    <option value="default">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </div>
            <div className='folder-div'>
                <Path parent={parent} folders={folders} setParent={setParent} />
                <Folders parent={parent} folders={folders} setParent={setParent} 
                        setFolders={setFolders} sorterfunction={sorter}/>
            </div>
        </div>
    )
}

export default MainPage