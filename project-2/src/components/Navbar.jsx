
const Navbar = ({handleDarkMode, isDark}) => {


  return (
    <div className={`shadow-md ${isDark ? 'bg-black text-white' : ''} flex flex-row justify-between items-center p-4 `} >
      <h1 className='text-2xl font-bold'>Where in the Word?</h1>
       <button onClick={handleDarkMode} className='border px-2 rounded-md'>
        {
          isDark ? <i className="ri-moon-fill"></i>  : <i className="ri-sun-fill"></i>
        }
       </button>
    </div>
  )
}

export default Navbar
