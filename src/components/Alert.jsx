import React from 'react'
import { useState } from 'react'

const Alert = ({setParent, alertTrigger, folders, setAlertTrigger, setFolders}) => {
  const [deletion, handleDeletion] = useState(false)

  function handleDelete(setParent, alertTrigger, folders, setAlertTrigger, setFolders) {
    let tempObj = {...folders}
    let deletedInfo = tempObj[alertTrigger]
    //console.log(deletedInfo, "deletedInfo")
    delete tempObj[alertTrigger]
    let deletedFolderParent = deletedInfo.parent
    console.log(tempObj, "before")
    if(tempObj[deletedFolderParent]) {
        let newchildarray = []
        newchildarray = tempObj[deletedFolderParent].child.filter(item => item !== alertTrigger)
        tempObj[deletedFolderParent].child = newchildarray
        // console.log(folders)
        console.log(tempObj, "after")
        folders = {...tempObj}
        console.log(folders, "copied-folder")
        setParent(deletedFolderParent)
        // setAlertTrigger("")
        // setFolders(folders => ({
        //     ...tempObj
        // }))
    }
    else {
        setAlertTrigger("")
    }
  }
  function handleCancel() {
    setAlertTrigger("")
  }
  return (
    <div className='alertbox-div'>
        <span>{`Are you sure you want to delete the folder "${folders[alertTrigger].title}"?`}</span>
        <div className='alert-btn-div'>
            <button className='delete-btn' onClick={() => handleDelete(setParent, alertTrigger, folders, setAlertTrigger, setFolders)}>Yes</button>
            <button className='cancel-btn' onClick={() => handleCancel(setAlertTrigger)}>No</button>
        </div>
    </div>
  )
}

export default Alert