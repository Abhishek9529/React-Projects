
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const DeleteAll = () => {
    const {DeleteAllTasks} = useContext(TaskContext)
    return (
        <div className="text-center">
            <button onClick={DeleteAllTasks} className="border rounded-4xl px-2 py-1 bg-[#8a2be1] text-white"><i class="ri-delete-bin-5-fill"></i></button>
        </div>
    )
}

export default DeleteAll
