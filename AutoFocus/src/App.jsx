import { useContext } from "react"
import Input from "./components/Input"
import { ThemeContext } from "./context/ThemeContext"

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`flex flex-col w-full h-screen items-center justify-center ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Input />

        <label className="" >
          <input
            checked={isDark}
            onChange={ toggleTheme}
            type="checkbox" />
          Dark
        </label>
      </div>
    </>
  )
}

export default App

