import Login from "./components/auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./components/others/Header"
import TaskListNumbers from "./components/others/TaskListNumbers"
import TaskList from "./components/TaskList/TaskList"

function App() {

  return (
    <>
    <div className="px-10 pt-10">
   {/* <Login/> */}
     {/* <Header/> */}
     {/* <TaskListNumbers/> */}
     {/* <TaskList/> */}
     {/* <AdminDashboard/> */}
     <EmployeeDashboard/>
    
    </div>
     
    </>
  )
}

export default App
