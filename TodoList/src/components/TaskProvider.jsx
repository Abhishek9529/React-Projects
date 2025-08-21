import { useCallback, useMemo, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState([])
    const [filterType, setFilterType] = useState('all')

    const AddTask = useCallback((task) => {
        setAllTasks((prev) => [task, ...prev])
    }, [])

    const DeleteAllTasks = useCallback(() => {
        setAllTasks([])
    }, [])

    const DeleteSingleTask = useCallback((id) => {
        const filteredTasks = allTasks.filter((task) => task.id !== id)
        setAllTasks(filteredTasks)
    }, [])

    const CompleteTask = (id) => {
        const updatedTasks = allTasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setAllTasks(updatedTasks)
    }

    // filter display tasks 


    const value = useMemo(() => ({
        allTasks,
        AddTask,
        DeleteAllTasks,
        DeleteSingleTask,
        CompleteTask,
        filterType,
        setFilterType,
    }), [allTasks, filterType]);

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider
