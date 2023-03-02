import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({tasks, task, setTasks, handleRemove}) => {
    console.log(task);
    const handleClick = (id) => {
      setTasks(tasks.map((task)=> task.id === id ? {...task, completed: !task.completed} : task))
    }
    const {id, taskName, taskDate, completed} = task
  return (
    <>
        <div className={`task-list ${completed && "task-list-border"}`} key={id} >
            <div className={` ${completed && "completed"}`} onClick={() => handleClick(id)}>
                <h1>{taskName}</h1>
                <p className='fs-4'>{new Date(taskDate).toDateString()} at {new Date(taskDate).toLocaleTimeString()}</p>
            </div>
            <button className='btn btn-light trash-can'><BsFillTrashFill onClick={() => handleRemove(id)}/></button>
        </div>
    </>
  )
}

export default Task