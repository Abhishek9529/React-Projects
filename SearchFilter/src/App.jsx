import CountryList from "../CountryList";
import { useEffect, useMemo, useState } from "react";
import CityName from "./components/CityName";

function App() {
  const [inputCountry, setInputCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [searchedCountry, setSearchedCountry] = useState('')

  const findCity = useMemo(() => {
    if (inputCountry.includes(' ')) return
    if (inputCountry.trim()) {
      let result = countries.filter((country) => country.toLowerCase().includes(inputCountry.toLowerCase()))
      setSearchedCountry(result)
    }
  }, [inputCountry])

  useEffect(() => {
    const allCounries = []
    CountryList.map((country) => {
      allCounries.push(country.name.common)
    })
    setCountries(allCounries)
  }, [])

  return (
    <>
      <div className="flex flex-col w-full  h-screen items-center justify-center p-4 bg-gray-500 space-y-4">
        <input className="border outline-none p-4 rounded-lg"
          value={inputCountry}
          onChange={e => setInputCountry(e.target.value)}
          type="text" placeholder="Enter valid city name..." />
        <div className='border rounded-lg p-4 m-2'>
          <CityName country={searchedCountry} />
        </div>
      </div>
    </>
  )
}

export default App
