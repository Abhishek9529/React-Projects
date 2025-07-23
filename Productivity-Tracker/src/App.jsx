import { useEffect, useRef, useState } from "react";
import Test from "./components/Test";
function App() {


  const [tasks, setTasks] = useState([])
  const [currentInputTask, setCurrentInputTask] = useState('')
  const [seconds, setSeconds] = useState(0)
  const IntervalRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=>{
  const allTasks = JSON.parse(localStorage.getItem('tasks')) || []
  setTasks(allTasks)
  },[])

  //  const allTasks = JSON.parse(localStorage.getItem('tasks')) || []
  // console.log(allTasks);


  const handleAddInput = () => {
    if (currentInputTask != '') setTasks(prev => [...prev, { name: currentInputTask, tiem: seconds }])


    setCurrentInputTask('')
  }

  const handleStart = () => {
    IntervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
      console.log(seconds);
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(IntervalRef.current)
  }

  const handleReset = () => {
    clearInterval(IntervalRef.current)
    setSeconds(0)
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 pt-5 items-center bg-gray-800 text-white">
        <h1>🧠 Productivity Tracker</h1>
        <div className="space-x-4">
          <input type="text"
            className="outline-none border rounded-md px-2 py-1"
            value={currentInputTask}
            onChange={e => setCurrentInputTask(e.target.value)}
            placeholder="Enter task name"
          />

          <button onClick={handleAddInput} className="px-2 py-1 rounded-md bg-blue-500">Add Task</button>
        </div>

        <div>
          ⏱ Timer: {seconds} seconds
        </div>
        <div className="flex felx-row gap-4">
          <button onClick={handleStart} className="px-2 py-1 rounded-md bg-green-500">Start</button>
          <button onClick={handleStop} className="px-2 py-1 rounded-md bg-yellow-500">Stop</button>
          <button onClick={handleReset} className="px-2 py-1 rounded-md bg-red-500">Reset</button>
        </div>

        <hr className="mt-4 w-full h-[1px] bg-white"></hr>
        <div>
          <h1 className="mt-4 mb-4">📋 Task List:</h1>
          <ul>
            {
              
                tasks.map(task => (
                <li className=" mb-2">Task: {task.name} Time: {task.time}</li>
              ))
            }
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;

