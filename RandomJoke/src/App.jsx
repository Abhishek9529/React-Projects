import { useEffect, useState } from "react";

const App = () => {
  const [randomJoke, setRandomJoke] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const genereateRandomJoke = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json()
      setError(null)
      setRandomJoke(data.data.content)
    } catch (error) {
      setError(error.message)
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    genereateRandomJoke()
  }, [])

  return (
    <div className='flex flex-row w-full h-screen items-center justify-center bg-slate-800 text-white'>
      <div className='space-y-4 w-6/12 border rounded-xl p-4'  >
        <h1 className='text-xl font-bold'>Generate Random Joke</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-sm text-red-400">{error}</p>}
        {!isLoading && !error && <p><i>{randomJoke}</i></p>}
        <button disabled={isLoading} onClick={genereateRandomJoke} className='border rounded-xl px-2 py-1 text-sm font-bold'>{isLoading ? 'Loading...' : 'Generate'}</button>
      </div>
    </div>
  )
}

export default App
