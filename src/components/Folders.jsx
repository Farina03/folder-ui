import React from "react";
import './folder.css'
import FolderIcon from '@mui/icons-material/Folder';

const Folders = ({parent, folders, setParent}) =>{
    return (
            <div>
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
    )
}

export default Folders;