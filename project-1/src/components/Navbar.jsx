import React from 'react'
import nikeLogo from '../assets/nikeLogo.webp'

const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between items-center py-2 px-18'>
      <div>
        <img src={nikeLogo} width='80px' alt="" />
      </div>

      <div className=' w-3/12 flex flex-row justify-between items-center text-gray-600 text-sm font-bold'>
        <p>MENU</p>
        <p>LOCATION</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>

      <div>
        <button className='bg-red-500 text-white px-2 py-1 text-sm'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
