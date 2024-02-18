import React from 'react'

const Header = ({todos}) => {
  const activeTodos = todos.filter(el => el.isActive && !el.isDeleted).length;
  const doneTodos = todos.filter(el => !el.isActive && !el.isDeleted).length;

  return (
    <>
        <h1 className='todo-headerText'>TodoList</h1>
        <div>
            <span className='todo-headerTxt'>{activeTodos} more, </span>
            <span className='todo-headerTxt'>{doneTodos} done</span>
        </div>
    </>
  )
}

export default Header