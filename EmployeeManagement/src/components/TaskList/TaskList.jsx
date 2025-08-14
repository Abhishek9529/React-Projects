import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    
    return (
        <div id='taskList' className='h-[250px] w-full rounded-xl flex flex-row flex-nowrap items-center justify-center gap-4  px-5 py-5  overflow-x-auto'>
           {data.tasks.map((task, idx) =>{
            if (task.active) {
                return <AcceptTask key={idx} data={task}/>
            }
            // if (task.newTask) {
            //     return <NewTask key={idx} data={task}/>
            // }
            if (task.completed) {
                return <CompleteTask key={idx} data={task}/>
            }
            if (task.failed) {
                return <FailedTask key={idx} data={task}/>
            }
          })}
        </div>
    )
}

export default TaskList
