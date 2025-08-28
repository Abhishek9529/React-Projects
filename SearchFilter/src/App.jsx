import CountryList from "../CountryList";
import { useEffect, useMemo, useState } from "react";
import CityName from "./components/CityName";


function App() {
  const [inputCountry, setInputCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [searchedCountry, setSearchedCountry] = useState([])

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
      <div className="flex flex-col w-full  h-screen  items-center pt-20 p-4 bg-gray-800 text-white space-y-4">
        <input className="border outline-none p-4 rounded-lg"
          value={inputCountry}
          onChange={e => setInputCountry(e.target.value)}
          type="text" placeholder="Enter valid city name..." />
        <ul className=" h-[560px] overflow-y-auto ">
          {
            searchedCountry.map((country) => (
              <CityName countryName={country} />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
