import React from 'react'
import Folder from './Folder'
import './mainpage.css'
import AddButton from './AddButton'

const MainPage = () => {
    
    function handleChange() {

    }
  return (
    <div className='main-page'>
        <Folder folderName='My Folder 1' handleChange={handleChange}/>
        <Folder folderName='My Folder 2'/>
        <Folder folderName='My Folder 3'/>
        <Folder folderName='My Folder 4'/>
        <AddButton />
    </div>
  )
}

export default MainPage