import React from 'react'
import { useState } from 'react'

const Path = ({parent, folders, setParent}) => {
    const path = []
    let temp = parent
    if(parent !== 0) {
        while(temp !== 0) {
            path.push(folders[temp])
            temp = folders[temp].parent
        }
    }
  return (
        <div>
            {parent === 0 ? <div>Root</div> :
            <div onClick={() => setParent(folders[parent].parent)}>{folders[parent].title}</div>}
        </div>
  )
}

export default Path