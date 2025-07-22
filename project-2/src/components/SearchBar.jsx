
const SearchBar = ({input, setInput, isDark}) => {

  return (
    <div>
      <input  className={`w-[400px] p-2 ${isDark ? 'border' : ''} rounded-md shadow-md`}
      type="text"
      placeholder='Search'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
       />
    </div>
  )
}

export default SearchBar
