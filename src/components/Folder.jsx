import React from 'react'
import './folder.css'

const Folder = (props) => {
  return (
    <div className='folder-div'>
        <div className='folder'>
            File Image
        </div>
        <div className='title'> {props.folderName} </div>
    </div>
  )
}

export default Folder