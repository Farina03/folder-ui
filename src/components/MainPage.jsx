import React, { useEffect, useState } from 'react'
import './mainpage.css'
import AddButton from './AddButton'
import Folders from './Folders'
import './addbutton.css'
import Path from './Path'

const MainPage = () => {
    const [parent, setParent] = useState(0)  
    const [folderName, setFolderName] = useState("")     
    const [folders, setFolders] = useState(() => {     //{id1: {id: "id1", title: 'Folder 1', parent: 0, child: []}}
        return JSON.parse(localStorage.getItem("folders")) || {}
    })
        
    const [selectedOption, setSelectedOption] = useState( () => {
        return JSON.parse(localStorage.getItem("order")) || ""})
    const [sortedArray, setSortedArray] = useState([])

    useEffect(() => {
        localStorage.setItem('folders', JSON.stringify(folders))
        sorter(selectedOption || "", folders)
        
    }, [folders])
    
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

    function handleSort(event, folders) {
        const {value} = event.target
        setSelectedOption(value)
        localStorage.setItem('order', JSON.stringify(value))
        sorter(value, folders)
    }

    function sorter(opt, folders) {
        let foldersTitleArray = Object.keys(folders).map(item => {

            return [folders[item].title.toUpperCase(), folders[item].id]           
        })
        if(opt === "default") setSortedArray(foldersTitleArray)
        else if(opt === "asc") foldersTitleArray.sort()
        else foldersTitleArray.sort().reverse()
        console.log(foldersTitleArray)
        setSortedArray(foldersTitleArray)
    }
    
    return (
        <div className='main-page'>
            <div className='navbar-div'>
                <div className='navbar-title'>FOLD'em</div>
            </div>
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
                {/* <label className="sort-label" for="sortoption">Sort By</label> */}
                <select className="sort-options" id="sortopt" value={selectedOption} 
                        onChange={(event) => handleSort(event, folders)}>
                    <option value="">Sort By --</option>
                    <option value="default">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select> 
            </div>
            <Path parent={parent} folders={folders} setParent={setParent} />
            <Folders opt={selectedOption} sortedArray={sortedArray} sorter={sorter} parent={parent} 
                    folders={folders} setParent={setParent} setFolders={setFolders} />
            
        </div>
    )
}

export default MainPage