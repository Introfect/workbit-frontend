import React from 'react'
import axios from 'axios'
import Boards from './Boards'

const LeftNav = () => {
    const createBoard = () => {
        
    }
  return (
    <div className='p-5'>

    <div className='flex flex-col p-5'>
        <div 
        onClick={createBoard()}
        className='cursor-pointer'>
            <h3>Create Board</h3>
        </div>
        <div>
            <h3>My Boards</h3>
        </div>
    </div>
    <Boards/>
    </div>

  )
}

export default LeftNav