
import { useContext } from 'react'
import { useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { nanoid } from 'nanoid'

const InputTask = () => {
    console.log('render InputTask comp');
    const { AddTask } = useContext(TaskContext)
    const [inputTask, setInputTask] = useState('')

    const handleAddTask = () => {
        console.log('5. this fun create task ');
        if (!inputTask.trim()) {
            return
        }
        let task = {
            id: nanoid(),
            taskName: inputTask,
            completed: false,
        }
        AddTask(task)
        setInputTask('')
    }

    return (
        <>
            <div>
                <input
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    className=" w-full outline-none border shadow-sm border-[#8a2be1] rounded-md px-2 py-1" type="text" placeholder="Enter Task" />
            </div>
            <div className="text-center">
                <button onClick={handleAddTask} className="border rounded-4xl px-2 py-1 bg-[#8a2be1] text-white font-bold "><i className="ri-add-fill"></i></button>
            </div>
        </>
    )
}

export default InputTask
