import ProfileCard from "./components/ProfileCard"


function App() {

  return (
    <>
    <div className="flex flex-row overflow-auto gap-4 p-4">
       <ProfileCard/>
       <ProfileCard/>
       <ProfileCard/> 
       <ProfileCard/>
       <ProfileCard/>
       <ProfileCard/>
    </div>
      
    </>
  )
}

export default App
