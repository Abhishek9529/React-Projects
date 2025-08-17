import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
const Input = () => {
    const [text, setText] = useState('')
    const inputRef = useRef(null)
    const {isDark} = useContext(ThemeContext)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className={`space-y-2 border rounded-md p-4  ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={inputRef} className="border rounded-md outline-none p-2" type="text" placeholder="Ask Anything" />
            <p className="ml-2">{text}</p>
            <button onClick={() => setText('')} className="border rounded-md px-2 py-1">Clear</button>
        </div>
    )
}

export default Input

