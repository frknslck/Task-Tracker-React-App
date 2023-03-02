import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({task, handleRemove}) => {
    const {id, taskName, taskDate} = task
    console.log(id);
  return (
    <>
        <div key={id}>
            <div>
                <h1>{taskName}</h1>
                <h1>{taskDate}</h1>
            </div>
            <button><BsFillTrashFill onClick={() => handleRemove(id)}/></button>
        </div>
    </>
  )
}

export default Task