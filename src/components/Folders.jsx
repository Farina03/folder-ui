import React, { useState, useEffect } from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';
import Path from "./Path";
import Alert from "./Alert";

const Folders = ({parent, folders, setParent, setFolders}) =>{
    const [alertTrigger, setAlertTrigger] = useState("")
    function handleDelete(v) {
        setAlertTrigger(v)
        //confirm()
    }
    return (
            <div>
                {console.log(folders, "initial")}
                {alertTrigger !== "" ? 
                <Alert setParent={setParent} alertTrigger={alertTrigger} folders={folders} 
                        setAlertTrigger={setAlertTrigger} setFolders={setFolders}/> :
                <div className="folder-outer-div">
                    {Object.keys(folders).map((v)=>{
                        let thisFolder = folders[v];
                        if(thisFolder.parent !== parent) return null;
                        return (
                            <div className='folder-div'> 
                                <div className="delete-div">
                                    <button className="delete-alert-btn" 
                                            name={v} onClick={() => handleDelete(v)}>Delete</button>
                                </div>
                                <div className='folder' onClick={()=>{setParent(v);}}>
                                    <FolderIcon color='primary' fontSize='large'/>
                                </div>
                                <div className='title'> {thisFolder.title} </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
            
    )
}

export default Folders;