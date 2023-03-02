import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({task, handleRemove}) => {
    const {id, taskName, taskDate, completed} = task
  return (
    <>
        <div key={id}>
            <div className={`${completed && "completed"}`}>
                <h1>{taskName}</h1>
                <h1>{new Date(taskDate).toDateString()}</h1>
            </div>
            <button><BsFillTrashFill onClick={() => handleRemove(id)}/></button>
        </div>
    </>
  )
}

export default Task