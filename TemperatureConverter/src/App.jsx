import { useState } from "react"
import Input from "./components/Input"

function App() {

  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)

  const handleConverter = ({ type, value }) => {

    // Convert the input value from string to a number
    const numericValue = parseFloat(value);

    // If the input is not a valid number (e.g., empty), reset both fields
    if(isNaN(numericValue)){
      setCelsius('')
      setFahrenheit('')
      return
    }

    if (type == 'celsius') {
        setCelsius(numericValue)
        let calculatedFahrenheit = (numericValue * 9 / 5) + 32
        setFahrenheit(calculatedFahrenheit.toFixed(2))
    } else {
        setFahrenheit(numericValue)
        let calculatedCelsius = (numericValue - 32) * 5 / 9
        setCelsius(calculatedCelsius.toFixed(2))
    }
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center bg-gray-800 text-white space-y-4">
        <Input
          value={celsius}
          type='celsius'
          handleConverter={handleConverter}
        />
        <Input
          value={fahrenheit}
          type='fahrenheit'
          handleConverter={handleConverter}
        />
      </div>
    </>
  )
}

export default App
