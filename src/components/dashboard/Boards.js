import React from 'react'
import { privateAxios } from '../../auth'
import { useState, useEffect } from 'react'

const Boards = () => {
    const [boards, setBoards] = useState([])
    useEffect(() => {
        privateAxios.get('/board/getboards')
        .then(res => {
           setBoards(res.data.boards)
        })
    }, [])
    console.log(boards)

  return (
    <div>

        {boards?
        boards.map(board => (
            <div key={board._id}>
                <h3>{board.name}</h3>
                </div>
        )):null }
        
                


    </div>
  )
}

export default Boards