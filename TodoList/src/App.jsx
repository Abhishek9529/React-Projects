import DeleteAll from "./components/DeleteAll"
import TaskList from "./components/TaskList"
import InputTask from "./components/InputTask"
import TaskTypes from './components/TaskTypes'


function App() {

  return (
    <>
      <div className="flex flex-col w-full h-screen items-center mt-20">
        <div className=" p-4 space-y-4 h-[350px]  rounded-md shadow-md ">
          <InputTask />
          <TaskTypes />
          <TaskList />
          <DeleteAll />
        </div>
      </div>
    </>
  )
}

export default App
