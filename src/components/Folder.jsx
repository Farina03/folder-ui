import React from 'react'
import './folder.css'

const Folder = (props) => {
  return (
    <div className='folder-div'>
        <div className='folder' onClick={props.handleClick}>
            File Image
            {/* <FontAwesomeIcon icon="fas fa-folder" /> */}
        </div>
        <div className='title'> {props.folderName} </div>
    </div>
  )
}

export default Folder