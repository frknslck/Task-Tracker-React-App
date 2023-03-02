import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({task, handleRemove}) => {
    const {id, taskName, taskDate, completed} = task
  return (
    <>
        <div className={`task-list ${completed && "task-list-border"}`} key={id}>
            <div className={` ${completed && "completed"}`}>
                <h1>{taskName}</h1>
                <p className='fs-4'>{new Date(taskDate).toDateString()} at {new Date(taskDate).toLocaleTimeString()}</p>
            </div>
            <button className='btn btn-light trash-can'><BsFillTrashFill onClick={() => handleRemove(id)}/></button>
        </div>
    </>
  )
}

export default Task