import React from 'react'
import Form from './Form'

const ThemeContextContainer = ({ isDark, setTheme }) => {

    return (
        <div className={` border rounded-md h-[140px] w-[400px] space-y-4 mt-10 p-4 ${isDark ? 'bg-black text-white' : 'bg-white'}`}>
            <Form/>
            <label >
                <input type="checkbox"
                 checked={isDark}
                 onChange={setTheme}
                 />
                Use dark mode
            </label>
        </div>
    )
}

export default ThemeContextContainer
