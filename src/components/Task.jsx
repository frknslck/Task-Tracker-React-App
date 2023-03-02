import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({task, handleRemove}) => {
    const {id, taskName, taskDate, completed} = task
  return (
    <div>
        <div className='task-list' key={id}>
            <div className={` ${completed && "completed"}`}>
                <h1>{taskName}</h1>
                <p>{new Date(taskDate).toDateString()}</p>
            </div>
            <button className='btn btn-light'><BsFillTrashFill onClick={() => handleRemove(id)}/></button>
        </div>
    </div>
  )
}

export default Task