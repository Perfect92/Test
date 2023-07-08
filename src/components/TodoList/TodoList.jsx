import React, {useState} from 'react'

export default function TodoList({addTodo}) {
const [value, setValue] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault()

    addTodo(value)
    
    setValue('')
}

    return (
    <>
        <h1> To-Do List</h1>
        <form onSubmit={handleSubmit} >
        <input className='todo-input' 
        type="text" value={value} placeholder='Enter a task' onChange={(e)=> setValue(e.target.value)}  />
        <button type='submit' className='todo-btn'>ADD</button>
        </form>

    </>
    )
}
