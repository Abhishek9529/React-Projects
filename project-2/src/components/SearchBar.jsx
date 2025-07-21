import React from 'react'
import { useState } from 'react'

const SearchBar = () => {
    const [input, setInput] = useState('')
  return (
    <div>
      <input  className='w-[400px] p-2 rounded-md shadow-md'
      type="text"
      placeholder='Search'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
       />
    </div>
  )
}

export default SearchBar
