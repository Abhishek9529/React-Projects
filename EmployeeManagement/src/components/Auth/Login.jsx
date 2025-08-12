import React, { useState } from 'react'

const Login = ({handleLogin}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
      e.preventDefault()
    // console.log(email, password, "in Login comp");
    handleLogin(email, password)
    setEmail('')
    setPassword('')
    }

  return (
    <div className='flex flex-row w-full h-screen items-center justify-center'>
     <div className='border-2 border-blue-600 rounded-xl'>
       <form
       onSubmit={(e) => submitHandler(e)}
        className='flex flex-col items-center justify-center p-15 gap-5' >
        <input
        value={email}
        onChange={(e) =>{
            setEmail(e.target.value)
        }}
         required className='outline-none border border-blue-500 rounded-full px-4 py-3 text-xl' type="email" placeholder='Email' />
        <input
        value={password}
        onChange={(e) =>{
            setPassword(e.target.value)
        }}
         required className='outline-none border border-blue-500 rounded-full px-4 py-3 text-xl' type="password" placeholder='Password' />
        <button className='w-full  rounded-full bg-blue-600 px-4 py-3 text-xl'>Log in</button>
       </form>
     </div>
    </div>
  )
}

export default Login
