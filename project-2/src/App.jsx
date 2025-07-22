import { useCallback, useState } from 'react'
import CountryContainer from "./components/CountryContainer"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import SearchBar from "./components/SearchBar"
import CountryList from '../CountryList'
function App() {
  const [input, setInput] = useState('')
  const [isDark, setIsDark] = useState(false);

  const filterCountry = CountryList.filter(
    (country) => country.name.common.toLowerCase().includes(input.toLowerCase())
  )

  const handleDarkMode = useCallback(
    () => {
      setIsDark(!isDark)
    }, [isDark])

  return (
    <>
      <Navbar
        isDark={isDark}
        handleDarkMode={handleDarkMode}
      />
      <div className={`flex flex-row ${isDark ? 'bg-black text-white ' : ''} px-4 justify-between pt-4`}> 
      <SearchBar
      isDark={isDark}
      input={input}
      setInput={setInput}
       />
      <Options setInput={setInput} isDark={isDark} />
       </div>
      <CountryContainer
      filterCountry={filterCountry}
        isDark={isDark}
      />
    </>
  )
}

export default App
