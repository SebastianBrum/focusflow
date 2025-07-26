import './index.css';
import Navbar from './components/NavigationBar/Navbar.jsx'
import Sidebar from './components/SideBar/Sidebar.jsx';
import Tasks from './components/TaskList/Tasks.jsx';
import AddTask from './components/AddTask/addTask.jsx';
import TaskDetails from './components/TaskDetails/taskDetails.jsx';
import { useEffect, useState} from 'react';

function App() {
  // State to control visibility of Add Task modal
  const [showAddTask, setShowAddTask] = useState(false);
  // State to track which task is selected for detailed view
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  // State for new task being created
  const [task, setTask] = useState({
        title: '',
        description: [],
        dateComplete: '',
        importance: 'medium',
        category: ''
    });
  // State for all tasks, initialized from localStorage or empty array
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

// Save tasks to localStorage whenever tasks array changes
useEffect(() => {
  if (tasks.length > 0) {
    console.log("Updated task list:", tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}, [tasks]);

  // Function to handle form submission and add new task
  function handleSubmit(newTask) {
  // Add unique ID using timestamp
  const taskWithId = { ...newTask, id: Date.now() };

  // Add new task to tasks array
  setTasks(prev => [...prev, taskWithId]);
    // Reset task form
    setTask({
        title: '',
        description: '',
        dateComplete: '',
        importance: 'medium',
        category: ''
    });
  }

  // Toggle Add Task modal visibility
  function handleAddTaskClick() {
    setShowAddTask((prev) => !prev);
  }

  // Close task details view
  function handleTaskClose(){
    setSelectedTaskId(null);
  }

  // Open task details view for specific task
  function handleTaskEnlargeClick(id){
    console.log("Clicked task id:", id);
        setSelectedTaskId(id);
    }

  // Mark task as completed and remove from list
  function onCompleted(id) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    setSelectedTaskId(null);
  }

  return (
    <>
      <Navbar onAddTaskClick={handleAddTaskClick}/>
      <div className="main-layout">
        <Tasks onClick={handleTaskEnlargeClick} tasks={tasks}/>
        <Sidebar />
      </div>
      {/* Conditionally render Add Task modal */}
      {showAddTask && <AddTask onClose={handleAddTaskClick} task={task} setTask={setTask} handleSubmit={handleSubmit}/>}
      {/* Conditionally render Task Details modal */}
      {selectedTaskId !== null && <TaskDetails id={selectedTaskId} tasks={tasks} onClose={handleTaskClose} onCompleted={onCompleted}/>}
    </>
  );
}

export default App;
