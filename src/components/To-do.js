import React, {useState} from 'react';
import TodoForm from './To-doForm'
import TodoList from './To-doList'
import {FaWindowClose} from 'react-icons/fa';
import {TiEdit} from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo}) {
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
            <FaWindowClose 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            />
            <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon'
            />
        </div>

        </div>
    ));
}

export default Todo
