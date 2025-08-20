import React from 'react'
import Task from './Task'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskList = () => {
    console.log('render TaskList comp');
    const { allTasks, filterType } = useContext(TaskContext)

    let filteredTasks = []
   if (filterType === 'active') {
     filteredTasks = allTasks.filter((task) => task.completed !== true)
   }  else if (filterType === 'completed') {
    filteredTasks = allTasks.filter((task) => task.completed === true)
   } else {
    filteredTasks = allTasks
   }

    return (
        <div>
            <ul id='taskList' className="space-y-2 h-[120px] overflow-auto">
                {filteredTasks.length === 0 ? (
                    <p className="text-gray-400">No tasks available</p>
                ) : (
                    filteredTasks.map((task) => (
                        <Task
                            taskName={task.taskName}
                            active={task.active}
                            completed={task.completed}
                            id={task.id}
                            key={task.id} />
                    ))
                )}
            </ul>
        </div>
    )
}

export default TaskList
