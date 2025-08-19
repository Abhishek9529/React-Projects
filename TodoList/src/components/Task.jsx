import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const Task = ({ taskName, id, active, completed }) => {
    const { DeleteSingleTask, CompleteTask } = useContext(TaskContext)
    return (
        <div className={`w-full border px-3 py-1 rounded-xl flex shadow-md ${completed ? 'border-[#8a2be1]' : 'border-[#f6f5fa]'}`}>
            <input className='mr-4'
                checked={completed}
                onChange={() => CompleteTask(id)}
                type="checkbox" />
            <li className={`w-full ${completed ? 'line-through' : ''}`}>{taskName}</li>
            <div className='w-full text-right'>
                <button className='text-gray-400 font-semibold' onClick={() => DeleteSingleTask(id)}>x</button>
            </div>
        </div>
    )
}

export default Task
