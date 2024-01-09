import React from 'react'
import './addbutton.css'
import AddIcon from '@mui/icons-material/Add';

const AddButton = (props) => {
  return (
    <button className='add-button' onClick={props.handleClick}>Create
    {/* <AddIcon style={{color: "white", backgroundColor:"black"}} fontSize='medium'/> */}
    </button>
  )
}

export default AddButton