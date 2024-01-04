import React from 'react'
import './addbutton.css'
import AddIcon from '@mui/icons-material/Add';

const AddButton = (props) => {
  return (
    <div className='add-button' onClick={props.handleClick}>
    <AddIcon fontSize='small'/>
    </div>
  )
}

export default AddButton