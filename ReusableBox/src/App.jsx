
import { useState } from "react";
import Box from "./assets/components/Box"
function App() {
  // 1. State to manage whether the modal is open or not
  const [isModelOpen, setIsModelOpen] = useState(false)

  // 2. Functions to open and close the modal
  const handleClose = () => setIsModelOpen(!isModelOpen)
  const handleShow = () => setIsModelOpen(!isModelOpen)

  const handleLogin = () => {
    console.log('Login sucessfull');
    setIsModelOpen(!isModelOpen)    // Close modal after login
  }

  return (
    <>
      <div className={`flex flex-row w-full h-screen bg-gray-600 text-white items-center justify-center`}>
        <div className={` ${isModelOpen && 'hidden'} text-center`}>
          <h1 className="text-2xl mb-4">Click to open the login modal</h1>
          {/* 3. Button to open the modal */}
          <button onClick={handleShow} className={`px-2 py-1 rounded-xl bg-green-500 text-black`}>Show Box</button>
        </div>
        {/* 4. Conditionally render the Modal only if isModalOpen is true */}
        {isModelOpen &&
          <Box handleClose={handleClose}>
            <label className='flex flex-col' >
              Username:
              <input className='border rounded-md px-2 py-1 outline-none' type="text"
                placeholder='Enter Username' />
            </label>

            <label className='flex flex-col'>
              Password:
              <input className='border rounded-md px-2 py-1 outline-none' type="password"
                placeholder='Enter Username' />
            </label>

            <div className='w-full text-center'>
              <button onClick={handleLogin} className=' px-2 py-1 rounded-xl bg-blue-500'>Login</button>
            </div>
          </Box>
        }
      </div>
    </>
  )
}

export default App
