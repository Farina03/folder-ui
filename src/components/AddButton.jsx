import React from 'react'
import './addbutton.css'

const AddButton = (props) => {
  return (
    <div className='add-button' onClick={props.handleClick}>Create Folder</div>
  )
}

export default AddButton