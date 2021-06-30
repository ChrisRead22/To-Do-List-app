import React, {useState} from 'react';
import TodoForm from './To-doForm';
import Todo from './To-do';

function TodoList() {
    const[todos, setTodos] = useState([]);

    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newToDos = [todo, ...todos]

        setTodos(newToDos)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }


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
