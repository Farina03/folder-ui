import React from 'react'
import './path.css'

const Path = ({parent, folders, setParent}) => {
    const path = []
    let temp = parent
    if(parent !== 0) {
        while(temp !== 0) {
            path.push(folders[temp])
            temp = folders[temp].parent
            if(temp === 0) path.push(0)
        }
    }
    function handleNavigation(item, setParent) {
        setParent(item.id)
    }
  return (
        <div className='crumb-outer-div'>
            {path.reverse().map(item => {
                return (
                    <div >
                        {item === 0 ? <div className='crumb' onClick={() => setParent(0)}>Root</div> :
                        <div className='breadcrumb-div'>
                        <div>{`>`}</div>
                        <div className='crumb' onClick={() => handleNavigation(item, setParent)}>{`${item.title}`}</div>

                        </div>}
                    </div>
                )
            })}
        </div>
  )
}

export default Path