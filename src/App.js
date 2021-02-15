import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // const name = 'Kelly';
  // const x = false;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at work',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    // console.log('Delete', id);
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
      <Header title='Kelly' />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (<h3>No Tasks to Show</h3>)}
    </div>
  );
}

export default App;
