import { useEffect, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskProvider = ({ children }) => {
    const [allTasks, setAllTasks] = useState([])
    const [filterType, setFilterType] = useState('all')

    const AddTask = (task) => {
        setAllTasks((prev) => [task, ...prev])
    }

    const DeleteAllTasks = () => {
        setAllTasks([])
    }

    const DeleteSingleTask = (id) => {
        const filteredTasks = allTasks.filter((task) => task.id !== id)
        setAllTasks(filteredTasks)
    }

    const CompleteTask = (id) => {
        console.log(allTasks);
        const updatedTasks = allTasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed}
            }
            return task
        })
        setAllTasks(updatedTasks)
        // console.log(updatedTasks);
    }

    // filter display tasks 
   

    const value = {
        allTasks,
        AddTask,
        DeleteAllTasks,
        DeleteSingleTask,
        CompleteTask,
        filterType,
        setFilterType,
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider
