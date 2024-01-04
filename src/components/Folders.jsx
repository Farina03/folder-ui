import React, { useState, useEffect } from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';
import Path from "./Path";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Folders = ({parent, folders, setParent}) =>{
    const [path, setPath] = useState([parent])
    function navigateHome() {
        setParent(0)
    }
    function navigateBack() {
        
    }
    return (
            <div>
                <div className="breadcrumbs-div">
                    {parent !== 0 && <div className="back-button" onClick={navigateBack}>
                        <ArrowBackIcon />
                    </div>}
                    <div className="homeicon-div" onClick={navigateHome}>
                        <HomeIcon />
                    </div>
                    {/* {path.map(item => {
                        return (
                            <div>{item}</div>
                        )
                    })} */}
                </div>
                {/* <Path parentId={parent} folders={folders}/> */}
                <div className="folder-outer-div">
                    {Object.keys(folders).map((v)=>{
                        let thisFolder = folders[v];
                        if(thisFolder.parent !== parent) return null;
                        return (
                            <div className='folder-div'> 
                            <div className='folder' onClick={()=>{setParent(v);}}>
                                <FolderIcon color='primary' fontSize='large'/>
                            {/* <span onClick={()=>{setParent(v);}}>{thisFolder.title}</span> */}
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