import React, { useState } from 'react'
import Header from './components/Header';
import StatusBar from './components/StatusBar/StatusBar';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';
import Trash from './components/Trash';
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [status, setStatus] = useState('all')
  const [searchText, setSearchText] = useState('')

  return (
    <div className='App'>
    <div className='todo-container'>
      <Header todos={todos}/>
      <StatusBar setStatus={setStatus} status={status} searchText={searchText} setSearchText={setSearchText}/>
      <TodoList todos={todos} setTodos={setTodos} status={status} searchText={searchText}/>
      <AddForm  setTodos={setTodos} setTodoText={setTodoText} todoText={todoText}/>
      <Trash setStatus={setStatus} status={status}></Trash>
    </div>
  </div>
  );
}

export default App;
