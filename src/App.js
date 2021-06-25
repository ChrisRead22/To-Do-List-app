import React from 'react';
import './App.css';
import ToDoForm from './components/To-doForm';
import TodoList from './components/To-doList';

function App() {
  return (
    <div className="to-do-list">
      <TodoList />
    </div>
  );
}

export default App;
