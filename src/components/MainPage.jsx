import React, { useState } from 'react'
import Folder from './Folder'
import './mainpage.css'
import AddButton from './AddButton'

const MainPage = () => {
    // const [folderArray, setFolderArray] = useState(null)
    const [numOfFolder, setNumOfFolder] = useState([])

    function handleFolderClick(event) {
        const {id} = event.target
        setNumOfFolder(numOfFolder.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    clicked: !item.clicked
                }
            }
            else return item
        })
            
        )}
    
    function handleButtonClick() {
        setNumOfFolder([...numOfFolder, {
            folder_name: "My Folder",
            folder_id: numOfFolder.length + 1,
            subfolder: [],
            clicked: false
        }])
    }
  return (
    <div className='main-page'>
        {numOfFolder.length > 0 && numOfFolder.map((item) => {
            return (
                <Folder id={item.folder_id}
                        folderName={`${item.folder_name} ${item.folder_id}`}
                        handleCick={handleFolderClick}/>
            )
        })}
        <AddButton handleClick={handleButtonClick}/>
        {console.log(numOfFolder)}
    </div>
  )
}

export default MainPage