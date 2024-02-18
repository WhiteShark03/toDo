import React from 'react'

const Trash = ({setStatus, status}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
        <button className='btn' value='trash' onClick={statusHandler} activeBtn={status === 'trash' && true}>Trash</button>
    </div>
  )
}

export default Trash