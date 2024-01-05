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
        id1: {id: "id1", title: 'Folder 1', parent: 0, child: []},
        id2: {id: "id2", title: 'Folder 2', parent: 0, child: ['id3']},
        id3: {id: "id3", title: 'Folder 2.1', parent: 'id2', child: ['id5']},
        id5: {id: "id5", title: 'Folder 2.1.1', parent: 'id3', child: []},
    });
    
    function handleCreate() {
        if(folderName !== '') {
            function randomId() {
                let randomId = Math.floor(Math.random() * 1000)
                console.log(randomId)
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
                    child: []
                }
            })
        }
        
    }
    function handleFolderName(event) {
        setFolderName(event.target.value)
    }
    
    return (
        <div className='main-page'>
            <div className='input-div'>
                <input className='input-field' type='text' onChange={handleFolderName} placeholder='Enter folder name'/>
                <AddButton handleClick={handleCreate}/>
            </div>
            <div className='folder-div'>
                <Path parent={parent} folders={folders} setParent={setParent} />
                <Folders parent={parent} folders={folders} setParent={setParent} />
            </div>
            {console.log(folders)}
        </div>
        
    )

}

export default MainPage