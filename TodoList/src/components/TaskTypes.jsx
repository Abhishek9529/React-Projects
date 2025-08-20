import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskTypes = () => {
    console.log('render TaskTypes comp');
    const {setFilterType, filterType} = useContext(TaskContext)
    return (
        <div className="w-full flex flex-row items-center justify-between gap-2">
            <h1 onClick={() => setFilterType('active') } className={` text-sm px-3 py-1 rounded-xl ${ filterType === 'active' ? 'bg-[#8a2be1] text-white ' : 'bg-[#f5f5f5] text-[#8a2be1]'}`}>Active</h1>
            <h1 onClick={() => setFilterType('completed') } className={` text-sm px-3 py-1 rounded-xl ${ filterType === 'completed' ? 'bg-[#8a2be1] text-white ' : 'bg-[#f5f5f5] text-[#8a2be1]'}`}>Completed</h1>
            <h1 onClick={() => setFilterType('all') } className={` text-sm px-3 py-1 rounded-xl  ${ filterType === 'all' ? 'bg-[#8a2be1] text-white ' : 'bg-[#f5f5f5] text-[#8a2be1]'}`}>All </h1>
        </div>
    )
}

export default TaskTypes
