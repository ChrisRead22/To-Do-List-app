import React, {useState} from 'react'
import TodoForm from './To-doForm'
import TodoList from './To-doList'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
    'todo-row'} key={index}>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            
        </div>

        </div>
    ))
}

export default Todo
