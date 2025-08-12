import { use, useContext, useEffect, useState, useSyncExternalStore } from "react"
import Login from "./components/auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./components/others/Header"
import TaskListNumbers from "./components/others/TaskListNumbers"
import TaskList from "./components/TaskList/TaskList"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"

function App() {
  const authData = useContext(AuthContext)
  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState({})
  

  useEffect(()=>{
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  },[user])
  

  const handleLogin = (email, password) => {

    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if (authData !== '') {
    const employee =  authData.employees.find((emp)=> emp.email == email && emp.password == password )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    } else {
      alert('Something else Wronge')
    }
  }

  return (
    <>
      <div className="px-10 pt-10">
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : '' }

      </div>

    </>
  )
}

export default App
