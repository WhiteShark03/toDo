import React, { useState } from 'react'
import './Todo.css'

const Todo = React.memo (
  ({todoObj, setTodos, status}) => {
    const [isSafe, setIsSave ] = useState()
  
    const doneHandler = () => {
      setTodos((prev) => prev.map((el)=> el.id === todoObj.id ? {...el, isActive: !el.isActive}:el))
    }
    
    const deleteOrRestoreHandler = () => {
      setTodos((prev) => prev.map((el)=> el.id === todoObj.id ? {...el, isDeleted: !el.isDeleted}:el))
    }
    const deleteHandler = () => {
      setTodos((prev) => prev.filter((el)=> el.id !== todoObj.id))
    }
    const editHandler = () => {
      setTodos((prev) => prev.map((el)=> el.id === todoObj.id ?  {...el, isEditing: !el.isEditing}:el))
    }
    
  const inputChangeHandler = (e) => {
    setTodos((prev) => prev.map((el)=>el.id === todoObj.id ? {...el, todoText: e.target.value}:el))
  }
  
    return (
      <li>
          <input type='text' 
          className={`todo-text active ${todoObj.isActive?'':'done'}`} 
          value={todoObj.todoText} 
          readOnly={!todoObj.isEditing}
          onChange={inputChangeHandler}
          ></input>
          {status === 'trash'?
          <div >
              <button className='btn' onClick={deleteOrRestoreHandler}>Restore</button>
              <button className='btn'  onClick={deleteHandler}>Delete</button>
          </div>
          :
          <div>
              <button className='btn' onClick={doneHandler}>Done</button>
              {
                todoObj.isActive && !todoObj.isDeleted && 
                <button className='btn' onClick={editHandler} isSafe={isSafe} setIsSave={setIsSave}>{todoObj.isEditing?'Save':'Edit'}</button>
              }
              <button className='btn' onClick={deleteOrRestoreHandler}>Delete</button>
          </div>
          }
      </li>
    )
  }
)

export default Todo