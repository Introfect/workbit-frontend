import React,{ useState } from 'react'
import { privateAxios } from '../../auth'

const CreateBoard =async () => {
  const [boardName, setBoardName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(boardName)
    privateAxios.post('/board/createboard', {name: boardName})
  }
  return (
    <div>
        <h1>Create Board</h1>
        <form>
            <input 
            onChange={(e)=>setBoardName(e.target.value)}
            type="text" placeholder="Board Name"/>
            <button
            onClick={(e)=>handleSubmit(e)}
            >Create</button>
        </form>
    </div>
  )
}

export default CreateBoard