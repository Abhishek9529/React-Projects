import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [city, setCity] = useState('Mumbai')
  const [temp, setTemp] = useState(0)
  const [searchedCity, setSearchCity] = useState('City name')
  const [invalidName, setInvalidName] = useState('')
  const [loading, setLoading] = useState(false)
  const cityRef = useRef()

  // auto focus input feild when city name is invalid
  useEffect(() => {
    if (invalidName !== '') cityRef.current.focus()
  }, [invalidName])

  const fetchWeather = useCallback(
    async () => {
      // return if city name is empty
      if (city === '') {
        return;
      }
      try {
        setLoading(true)
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b16d70888e924477b77103928251008&q=${city}&aqi=yes`)
        if (!response.ok) {
          throw new Error(`HTTP error! status:${response.status}`)
        }
        const data = await response.json()
        setTemp(data.current.temp_c)
        setSearchCity(data.location.name)
        setInvalidName('')
        setCity('')
      } catch (error) {
        setInvalidName('Enter valid city name*')
      } finally {
        setLoading(false)
      }
    }, [city])

  // it runs fetcheather() function on initial render
  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <>
      <div className="bg-gray-900 flex items-center justify-center min-h-screen">
        {/* <!-- Main container --> */}
        <div className="w-[380px] h-[450px]  bg-[#1e1e1e] border-2 border-blue-500 rounded-lg p-8 shadow-lg " >
          <form onSubmit={(e) => {
            e.preventDefault();
            fetchWeather();
          }}
            className="flex flex-col items-center justify-between h-full">

            {/* <!-- Weather Display Section --> */}
            <div className="text-center">
              <h1 id="temperature" className="text-5xl font-bold text-white">{temp}C</h1>
              <p id="city" className="text-gray-400 mt-2 text-xl">{searchedCity}</p>
              <span className="text-red-500">
                {invalidName !== '' ? 'Enter valid city name*' : ''}
              </span>
            </div>

            {/* <!-- Input Section --> */}
            <div className="w-full">
              <input
                ref={cityRef}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="cityInput"
                placeholder="Input City:"
                className="w-full bg-transparent border-2 border-gray-400 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white text-center"
              />
              <button
                id="submitBtn"
                // onClick={fetchWeather}
                disabled={loading}
                className="w-full bg-transparent border-2 border-gray-400 rounded-md p-3 text-white mt-4 hover:bg-gray-700 hover:border-white transition-colors duration-300"
              >
                {loading ? 'Loading' : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
