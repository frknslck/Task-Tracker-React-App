import React from 'react'
import Button from "./Button"

const Header = ({visibility, handleVisibility}) => {
  return (
    <>
        <h1 className='text-center'>Task Tracker React App</h1>
        <Button visibility={visibility} handleVisibility={handleVisibility}/>
    </>
  )
}

export default Header