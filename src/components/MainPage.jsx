import React, { useState } from 'react'
import Folder from './Folder'
import './mainpage.css'
import AddButton from './AddButton'

const MainPage = () => {
    const [folderArray, setFolderArray] = useState(null)
    const [numOfFolder, setNumOfFolder] = useState([{}])
    function handleFolderClick() {
        // setNumOfFolder(null)
    }
    function handleButtonClick() {
        setNumOfFolder(numOfFolder.push({
            folder_name: "My Folder",
            folder_num: numOfFolder.length
        }))
    }
  return (
    <div className='main-page'>
        {numOfFolder.map((item) => {
            return (
                <Folder folderName={`${item.folder_name} ${item.folder_num}`} handleCick={handleFolderClick}/>
            )
        })}
        
        {/* <Folder folderName='My Folder 2'/>
        <Folder folderName='My Folder 3'/>
        <Folder folderName='My Folder 4'/> */}
        <AddButton handleClick={handleButtonClick}/>
    </div>
  )
}

export default MainPage