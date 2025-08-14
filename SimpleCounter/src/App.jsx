import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setCount((prev) => prev - 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div className=" w-full h-screen bg-slate-500 flex flex-row items-center justify-center ">
        <div className="border border-black rounded-xl p-4 flex flex-col items-center justify-center gap-4" >
          <h1 className="text-xl text-white font-bold">Count {count}</h1>
          <button onClick={handleIncrement} className="rounded-xl px-2 py-1 bg-green-500 text-sm font-bold">Increment +1</button>
          <button disabled={count === 0} onClick={handleDecrement} className="rounded-xl px-2 py-1 bg-red-500 text-sm text-white font-bold">Decrement -1</button>
          <button onClick={handleReset} className="rounded-xl px-2 py-1 bg-yellow-500 text-sm  font-bold disabled:bg-gray-400">Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
