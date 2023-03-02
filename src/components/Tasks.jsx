import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, handleRemove}) => {
  return (
    <div className='d-flex flex-column gap-5 mt-3'>
        {tasks.map((task) => {
        return <Task task={task} key={task.id} handleRemove={handleRemove} />})}
    </div>
  )
}

export default Tasks