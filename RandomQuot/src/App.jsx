import { useEffect, useState } from "react";

function App() {
  const [author, setAuthor] = useState('')
  const [quote, setQuote] = useState('')

  const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const fetchNewQuote = async () => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      const quotes = data.data
      setAuthor(quotes.author)
      setQuote(quotes .content)

    } catch (error) {
      console.log('some error');
    }
  }

  useEffect(() => {
    fetchNewQuote()
  }, [])

  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center bg-slate-700 text-white">
        <div className="w-5/12 h-7/12 relative border rounded-md p-4 space-y-4">
          <h1>{author === '' ? 'Loading...' : author}</h1>
          <p>{quote === '' ? 'Loading...' : quote}</p>
          <button onClick={fetchNewQuote} className="absolute bottom-4 left-4 cursor-pointer bg-white text-black px-3 py-1 rounded ">New</button>
        </div>
      </div>
    </>
  )
}

export default App
