import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-md flex flex-row justify-between items-center p-4'>
      <h1 className='text-2xl font-bold'>Where in the Word?</h1>
       <button className='border px-2 rounded-md'>Dark Mode</button>
    </div>
  )
}

export default Navbar
