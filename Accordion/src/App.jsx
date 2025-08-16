import { useState } from "react"
import Accordion from "./components/Accordion"

function App() {

  return (
    <>
      <div className="flex flex-row w-full h-screen items-center justify-center bg-slate-700 text-white ">
        <div className="border w-6/12 rounded-xl p-4 space-y-3">
          <Accordion
           questionNum="1"
           answer="Lorem ipsum dolor sit amet consectetur adipisicing."
           />
        

          <Accordion
           questionNum="2" 
           answer="Lorem ipsum dolor sit amet consectetur adipisicing elit."
           />
          
        </div>
      </div>
    </>
  )
}

export default App
