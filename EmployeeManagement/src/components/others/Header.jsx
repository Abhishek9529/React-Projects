import React, { useState } from 'react'

const Header = ({data}) => {
  // const [userName, setUserName] = useState('')

  // if (!data) {
  //   setUserName("Admin")
  // } else {
  //   setUserName(data.firstname)
  // }

  const handleLogout = () =>{
     localStorage.setItem('loggedInUser', null)
     window.location.reload()
  }

  return (
    <div className='flex flex-row items-center justify-between mb-10'>
      <h1 className='text-xl font-semibold'>Hello,  <br /> <span className='text-2xl font-semibold'>{data.firstname}</span></h1>
      <button onClick={handleLogout} className=' rounded-full py-1  px-4 bg-red-500 text-md '>Log Out </button>
    </div>
  )
}

export default Header
