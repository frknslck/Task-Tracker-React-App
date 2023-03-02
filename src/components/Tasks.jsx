import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, handleRemove}) => {
  return (
    <>
        {tasks.map((task) => {
        return <Task task={task} key={task.id} handleRemove={handleRemove} />})}
    </>
  )
}

export default Tasks