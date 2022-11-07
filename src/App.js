import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, seTtasks] = useState([])

  const [showForm, setshowForm] = useState(false) 

  // Get The Fetched Data
  useEffect(() => { 
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      seTtasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks From Server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task From Server for updating the reminder class
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add A Task
  const submitTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    seTtasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = {id, ...task}

    // seTtasks([...tasks, newTask])
  }

  // Toggle the class reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    seTtasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

   // Delete Task
   const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete the blog")) {
      await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    }
    

    // seTtasks(tasks.filter((task) => task.id !== id))
  }



  // Show Task form
  const showTaskForm = () => {
    setshowForm(!showForm)
  }
  
    
  return (
    <div className="container">
      <Header title='Task Tracker' showTaskForm={showTaskForm} showForm={showForm} />
      {showForm && <AddTaskForm submitTask={submitTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  )
}

export default App;
