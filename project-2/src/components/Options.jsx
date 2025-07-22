import React from 'react'

const Options = ({isDark, setInput}) => {
  return (
    <div >
      <select className={`p-2 shadow-md rounded-md ${isDark ? 'border bg-black text-white' : ''}`}
      onChange={e => setInput(e.target.value)}
       name="" id="">
        <option value="Japan">Japan</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="India">India</option>
        <option value="Russia">Russia</option>
        <option value="Argentina">Argentina</option>
      </select>
    </div>
  )
}

export default Options
