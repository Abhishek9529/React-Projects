import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDashboard = ({data}) => {
    return (
        <div>
            <Header data={data} />
            <CreateTask data={data}/>
            <AllTasks data={data}/>
        </div>
    )
}

export default AdminDashboard
