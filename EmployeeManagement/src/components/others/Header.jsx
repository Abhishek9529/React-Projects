import React from 'react'

const Header = ({data}) => {
  
  return (
    <div className='flex flex-row items-center justify-between mb-10'>
      <h1 className='text-xl font-semibold'>Hello,  <br /> <span className='text-2xl font-semibold'>{data.firstname}</span></h1>
      <button className=' rounded-full py-1  px-4 bg-red-500 text-md '>Log Out </button>
    </div>
  )
}

export default Header
