import { createContext, useCallback, useEffect, useState } from "react"
import Form from "./components/Form"

const ThemeContext = createContext();

function App() {
  const [isDark, setTheme] = useState(false)

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'))
    setTheme(theme)
  }, [])

  const StorePreviousTheme = useCallback(() => {
    setTheme(!isDark)
    localStorage.setItem('theme', JSON.stringify(!isDark))
  },[isDark])

  return (
    <ThemeContext.Provider value={isDark}>
      <div className=" border rounded-md h-[140px] w-[400px] space-y-4 mt-10 p-4 ">
            <Form/>
            <label >
                <input type="checkbox"
                 checked={isDark}
                 onChange={StorePreviousTheme}
                 />
                Use dark mode
            </label>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export {ThemeContext}
