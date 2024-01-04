import React from 'react'
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';

const Folder = (props) => {
  // console.log(props);
  return (
    <div className='folder-div'>
        <div className='folder' onClick={props.handleClick}>
            <FolderIcon color='primary' fontSize='large'/>
        </div>
        <div className='title'> {props.folderName} </div>
    </div>
  )
}

export default Folder