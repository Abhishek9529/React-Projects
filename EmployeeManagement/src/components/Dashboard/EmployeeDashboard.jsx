import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashboard = ({data}) => {
  // console.log(data);
  
  return (
    <div>
      <Header data={data}/>
       <TaskListNumbers data={data}/>
      <TaskList data={data}/>
     
    </div>
  )
}

export default EmployeeDashboard
