import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header/>
       <TaskListNumbers/>
      <TaskList/>
     
    </div>
  )
}

export default EmployeeDashboard
