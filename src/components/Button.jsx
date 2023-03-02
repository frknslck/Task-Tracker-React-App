import React from 'react'

const Button = ({visibility, handleVisibility}) => {
  return (
    <button onClick={handleVisibility}>{visibility ? "Close Add Task Bar" : "Show Add Task Bar"}</button>
  )
}
export default Button