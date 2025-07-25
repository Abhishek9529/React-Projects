import { useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from 'nanoid';
import Test from "./components/Test";
function App() {


  const [tasks, setTasks] = useState([])
  const [currentInputTask, setCurrentTask] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const IntervalRef = useRef(null)

  // load tasks from localeStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(savedTasks)
  }, [])


  // save tasks to localestorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = async () => {
    if (currentInputTask.trim() !== '') {
      const allTasks = await JSON.parse(localStorage.getItem('tasks')) || []
      allTasks.push({ name: currentInputTask, _id: nanoid(), startTime: seconds, completedTime: 0, totalTime: 0, isCompleted: false })
      setTasks(allTasks)
      handleStart()
      setCurrentTask('')
    }
    // setTasks(prev => [...prev, { name: currentInputTask, _id: nanoid(), startTime: seconds, completedTime: 0, totalTime: 0, isCompleted: false }])

  }

  //Time Effect
  useEffect(() => {
    if (isRunning) {
      IntervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000);
    }
    return () => {
      clearInterval(IntervalRef.current)
    }
  }, [isRunning])

  const handleStart = useCallback(() => {
    setIsRunning(true)
  }, [])

  const handleStop = useCallback(() => {
    setIsRunning(false)
  }, [])

  const handleReset = useCallback(() => {
    clearInterval(IntervalRef.current)
    setSeconds(0)
  }, [])


  const handleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task._id === id && task.isCompleted === false) {
        console.log("task Completed");
        return { ...task, isCompleted: true, completedTime: seconds, totalTime: (seconds - task.startTime) }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="w-full h-screen  flex flex-col gap-4 pt-5 items-center bg-gray-800 text-white">
        <h1>🧠 Productivity Tracker</h1>
        <div className="space-x-4">
          <input type="text"
            className="outline-none border rounded-md px-2 py-1"
            value={currentInputTask}
            onChange={e => setCurrentTask(e.target.value)}
            placeholder="Enter task name"
          />

          <button onClick={handleAddTask} className="px-2 py-1 rounded-md bg-blue-500">Add Task</button>
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
        <div className=" w-[300px] overflow-y-scroll">
          <h1 className="mt-4 mb-4">📋 Task List:</h1>
          <ul>
            {

              tasks.map(task => (
                <div className="flex flex-row justify-between items-center border rounded-md p-4 m-4 " key={Math.random()}>
                  <div>
                  <li className=" mb-2">Task: {task.name}</li>
                  <h1  className="text-sm text-slate-400 ">Start Time: {task.startTime}</h1>
                  <h1 className="text-sm text-slate-400 ">Completed Time: {task.isCompleted ? task.completedTime : 'Running' }</h1>
                  <h1 className="text-sm text-slate-400 ">Status: {task.isCompleted ? 'Completed' : 'Running' }</h1>
                  </div>
                 
                  <button className={` text-sm font-bold px-2 rounded-md ${task.isCompleted ? 'text-white bg-green-500' : 'text-black bg-white'}`} onClick={() => handleTaskCompleted(task._id)}>
                    {task.isCompleted ? 'Completed' : 'Complete'}
                  </button>
                </div>
              ))
            }
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;

