import React from 'react'
import Button from '../Button'

const StatusBar = ({setStatus, status, searchText, setSearchText}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  const searchHandler = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div>
        <div className='todo-statusBtn'>
        <Button  className='todo-statusBtn' value='all' onClick={statusHandler} activeBtn={ status === 'all'&&true}>All</Button>
        <Button  className='todo-statusBtn'  value='active' onClick={statusHandler} activeBtn={status === 'active'&&true}>Active</Button>
        <Button  className='todo-statusBtn'  value='done' onClick={statusHandler} activeBtn={status === 'done'&&true}>Done</Button>
        </div>
        <input className='todo-searchInp' type="text" placeholder="Search" value={searchText} onChange={searchHandler}/>
    </div>
  )
}

export default StatusBar