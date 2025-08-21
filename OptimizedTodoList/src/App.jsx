import { useCallback, useState } from "react"
import Task from "./components/Task"
import { nanoid } from "nanoid"

function App() {
  console.log('app comp render');
  
  const [inputTask, setInputTask] = useState('')
  const [allTasks, setAllTasks] = useState([
    { taskName: 'learn react', id: '123' },
    { taskName: 'writes notes', id: '456' },
    { taskName: 'revise chapter', id: '789' }
  ])
  

  const handleAddtodos = () => {
    console.log('add todos function run');
    const newTask = { taskName: inputTask, id: nanoid() }
    setAllTasks((prevTasks) => [...prevTasks, newTask])
    setInputTask('')
  }

  const handleDeleteTodos = useCallback((id) =>{
    console.log('delete todos function run');
    setAllTasks((prevTasks) => prevTasks.filter(todo => todo.id !== id));
  },[])


  return (
    <>
      <div className="min-h-screen bg-gray-100 font-sans flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Optimized To-Do List 📝</h1>
            {/* Input for new todos */}
            <div  className="flex gap-2 mb-4">
              <input type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddtodos()}
                placeholder="Add a new task..."
                className="flex-grow p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <button 
              onClick={handleAddtodos}
               className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">Add</button>
            </div>

            {/* Lists of todos */}
            <ul className="space-y-2">
              {allTasks &&
                allTasks.map((task) => (
                  <Task key={task.id}
                    task={task.taskName}
                    id={task.id}
                    onDelete={handleDeleteTodos}
                  />
                ))
              }
            </ul>
          </div>
           <p className="text-center text-gray-500 text-sm mt-4">
          Type in the input to see that list items don't re-render.
        </p>
        </div>

      </div>
    </>
  )
}

export default App
