import React, {useState} from 'react'

export default function EditTodo({editTodo, task}) {
const [value, setValue] = useState(task.task)

const handleSubmit = (e) =>{
    e.preventDefault()

    editTodo(value, task.id)
    
    setValue('')
}

    return (
        <form onSubmit={handleSubmit} >
        <input className='todo-input' 
        type="text" placeholder='Update task' 
        value={value}
        onChange={(e)=> setValue(e.target.value)}  />
        <button type='submit' className='todo-btn'>Update</button>
        </form>
    )
}
