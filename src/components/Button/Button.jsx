import React from 'react'

const Button = ({children, onClick, value='', activeBtn=false}) => {
  return (
    <button className='todo-headerBtn' type='button' onClick={onClick} value={value} style={{background: activeBtn ? '#D0CFEC':'inherit'}}>{children}</button>
  )
}

export default Button