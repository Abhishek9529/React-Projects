import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashboard = ({data}) => {
  // console.log(data);
  
  return (
    <div>
      <Header data={data}/>
       <TaskListNumbers/>
      <TaskList/>
     
    </div>
  )
}

export default EmployeeDashboard
