import React from 'react'
import Button from "./Button"

const Header = ({visibility, handleVisibility}) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-5'>
        <h1 className='text-center text-light mb-3'>Task Tracker</h1>
        <Button visibility={visibility} handleVisibility={handleVisibility}/>
    </div>
  )
}

export default Header