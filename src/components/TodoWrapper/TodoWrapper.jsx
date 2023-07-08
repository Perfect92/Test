import React , {useState} from 'react'
import TodoList from '../TodoList/TodoList'
import TodoTask from '../TodoTask/TodoTask'
import EditTodo from '../EditTodo/EditTodo'


export default function () {
    const [todos, setTodos] = useState([])


    const addTodo = todo=> {
        setTodos([...todos, {id: Math.floor(Math.random() * 10000), task: todo, isEditing: false}])
        console.log(todos)
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id =>  {
        setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo))
    }
    const editTask =(task, id)=>{
        setTodos(todos.map(todo => todo.id === id ? {... todo, task, isEditing: !todo.isEditing}: todo))}
    return (
    <div className='TodoWrapper'>
        <TodoList addTodo={addTodo}/>
        {todos.map((todo, index)=> (
            todo.isEditing ? (
                <EditTodo editTodo={editTask} task={todo}/>
            ):(<TodoTask task={todo} key={index} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />)
        ))}
    </div>
  )
}

