import React, { useState } from 'react'
import Folder from './Folder'
import './mainpage.css'
import AddButton from './AddButton'

const MainPage = () => {
    // const [folderArray, setFolderArray] = useState(null)
    const [numOfFolder, setNumOfFolder] = useState([]);
    const [currentFolder, setCurrentFolder] = useState([]);

    // console.log(numOfFolder);

    function handleFolderClick(folderId) {         //mdn, javascript.info
        // setNumOfFolder([]);
        setCurrentFolder([...currentFolder, folderId]);
        // console.log(numOfFolder, folderId,currentFolder);
        // const {id} = event.target
        // setNumOfFolder(numOfFolder.map(item => {
        //     if(item.id === id) {
        //         return {
        //             ...item,
        //             
        //         }
        //     }
        //     else return item
        // }))
    }

    const thisFolder = () =>{
        if(currentFolder.length === 0){
            return numOfFolder;
        }
        let temp = numOfFolder;
        currentFolder.forEach(v=>{
            let t = temp.filter(f => f.folder_id === v)[0];
            temp = t.subfolder;
        });
        return temp;
    }
    // console.log(numOfFolder);
    
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
        {thisFolder().map((item, key) => {
            return (
                <Folder id={item.folder_id}
                        folderName={`${item.folder_name} ${item.folder_id}`}
                        handleClick={()=>{handleFolderClick(item.folder_id)}} key={key}/>

                
            )
        })}
        <AddButton handleClick={handleButtonClick}/>
    </div>
  )
}

export default MainPage