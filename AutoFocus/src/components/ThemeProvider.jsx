import { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = ()=>{
        setIsDark(!isDark)
    }
    
    const value = {
        isDark,
        toggleTheme,
    };

  return (
     <ThemeContext.Provider value={value}>
        {children}
     </ThemeContext.Provider>
  )
}

export default ThemeProvider
