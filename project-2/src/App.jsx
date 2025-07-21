import CountryCard from "./components/CountryCard"
import CountryContainer from "./components/CountryContainer"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import SearchBar from "./components/SearchBar"
function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-row px-4 justify-between mt-4">
        {/* <SearchBar /> */}
        {/* <Options /> */}
      </div>
      <CountryContainer/>
    </>
  )
}

export default App
