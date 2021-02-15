import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // const name = 'Kelly';
  // const x = false;

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Doctors Appointment',
    //   day: 'Feb 5th at 2:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: 'Meeting at work',
    //   day: 'Feb 6th at 1:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: 'Food Shopping',
    //   day: 'Feb 5th at 2:30pm',
    //   reminder: false,
    // },
  ])

  useEffect(() => {
    // const fetchTasks = async () => {
    //   const res = await fetch('http://localhost:5000/tasks')
    //   const data = res.json();

    //   console.log(data);
    //   return data;
    // }

    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }


    getTasks();
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json();

    console.log(data);
    return data;
  }

  // Add Task
  const addTask = async (task) => {
    // console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    // console.log('Delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      {/* <Header title='Jaba'/> */}
      {/* <h1>Hello from React</h1> */}
      {/* <h2>Hello {name}</h2> */}
      {/* <h2>Hello {x ? 'Yes' : 'No'}</h2> */}
      <Header title='Kelly' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (<h3>No Tasks to Show</h3>)}
    </div>
  );
}

export default App;
