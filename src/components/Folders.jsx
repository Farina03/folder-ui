import React, { useState, useEffect } from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';
import Path from "./Path";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Folders = ({parent, folders, setParent}) =>{
    const [alerttrigger, setAlertTrigger] = useState(false)
    function navigateHome() {
        setParent(0)
    }
    function handleDelete() {
        alert("Are you sure you want to delete?")
    }
    return (
            <div>
                {/* <div className="breadcrumbs-div">
                    <div className="homeicon-div" onClick={navigateHome}>
                        <HomeIcon />
                    </div>
                </div> */}
                <div className="folder-outer-div">
                    {Object.keys(folders).map((v)=>{
                        let thisFolder = folders[v];
                        if(thisFolder.parent !== parent) return null;
                        return (
                            <div className='folder-div'> 
                                <div className="delete-div">
                                    <input type="button" className="delete-button" name={v} onClick={handleDelete} />
                                </div>
                                <div className='folder' onClick={()=>{setParent(v);}}>
                                    <FolderIcon color='primary' fontSize='large'/>
                                </div>
                                <div className='title'> {thisFolder.title} </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
    )
}

export default Folders;