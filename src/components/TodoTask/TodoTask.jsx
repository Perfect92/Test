import React from 'react'

export default function ({task, deleteTodo, editTodo}) {
  return (
    <div className='Task'>
        <p className='task-text'>{task.task}</p>
          
        <button className='todo-btn' onClick={()=> editTodo(task.id)}>Edit</button>
        <button className='todo-btn' onClick={()=> deleteTodo(task.id)}>delete</button>

    </div>
  )
}
