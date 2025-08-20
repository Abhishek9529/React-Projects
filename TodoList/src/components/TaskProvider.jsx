import { useMemo, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskProvider = ({ children }) => {
    console.log('render TaskProvider comp');
    const [allTasks, setAllTasks] = useState([])
    const [filterType, setFilterType] = useState('all')

    const AddTask = (task) => {
        console.log('1. this fun add task ');
        setAllTasks((prev) => [task, ...prev])
    }

    const DeleteAllTasks = () => {
        console.log('2. this fun delete all all task ');
        setAllTasks([])
    }

    const DeleteSingleTask = (id) => {
        console.log('3. this fun delete single task ');
        const filteredTasks = allTasks.filter((task) => task.id !== id)
        setAllTasks(filteredTasks)
    }

    const CompleteTask = (id) => {
        console.log('4. this fun completed task ');
        // console.log(allTasks);
        const updatedTasks = allTasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setAllTasks(updatedTasks)
        // console.log(updatedTasks);
    }

    // filter display tasks 


    const value = useMemo(()=>({
        allTasks,
        AddTask,
        DeleteAllTasks,
        DeleteSingleTask,
        CompleteTask,
        filterType,
        setFilterType,
    }), [allTasks]);

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider
