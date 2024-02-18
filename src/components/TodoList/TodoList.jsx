import React, {useEffect} from 'react'
import Todo from '../Todo'

const TodoList = ({todos, setTodos, status, searchText}) => {
  let filteredTodos;
  const lowerText = searchText.toLowerCase();

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  },[])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

    if(status === 'active') {
      filteredTodos = todos.filter(el => el.isActive && !el.isDeleted)
    }else if(status === 'done'){
      filteredTodos = todos.filter(el => !el.isActive && !el.isDeleted)
    }else if(status === 'trash'){
      filteredTodos = todos.filter(el => el.isDeleted)
    }else {
      filteredTodos = todos.filter(el => !el.isDeleted && el.todoText.toLowerCase().includes(lowerText))
    }

  return (
    <ul>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todoObj={todo} setTodos={setTodos} status={status}/>
      ))}
    </ul>
  )
}

export default TodoList 