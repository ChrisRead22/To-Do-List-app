import React, {useState} from 'react';
import TodoForm from './To-doForm';
import Todo from './Todo';

function TodoList() {
    const[todos, setTodos] = useState([]);

    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newToDos = [todo, ...todos]

        setTodos(newToDos)
    };


    return (
        <div>
            <h1>What's Today's Plan ?</h1>
            <TodoForm onSubmit={addToDo} />
            <Todo 
            todos={todos}
            completeTodo={completeTodo} />
        </div>
    );
}

export default TodoList
