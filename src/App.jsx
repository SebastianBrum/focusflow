import './index.css';
import Navbar from './components/NavigationBar/Navbar.jsx'
import Sidebar from './components/SideBar/Sidebar.jsx';
import Tasks from './components/TaskList/Tasks.jsx';
import AddTask from './components/AddTask/addTask.jsx';
import TaskDetails from './components/TaskDetails/taskDetails.jsx';
import { useEffect, useState} from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [task, setTask] = useState({
        title: '',
        description: [],
        dateComplete: '',
        importance: 'medium',
        category: ''
    });
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

useEffect(() => {
  if (tasks.length > 0) {
    console.log("Updated task list:", tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}, [tasks]);

  function handleSubmit(newTask) {
  const taskWithId = { ...newTask, id: Date.now() };

  setTasks(prev => [...prev, taskWithId]);
    setTask({
        title: '',
        description: '',
        dateComplete: '',
        importance: 'medium',
        category: ''
    });
  }

  function handleAddTaskClick() {
    setShowAddTask((prev) => !prev);
  }

  function handleTaskClose(){
    setSelectedTaskId(null);
  }

  function handleTaskEnlargeClick(id){
    console.log("Clicked task id:", id);
        setSelectedTaskId(id);
    }

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
      {showAddTask && <AddTask onClose={handleAddTaskClick} task={task} setTask={setTask} handleSubmit={handleSubmit}/>}
      {selectedTaskId !== null && <TaskDetails id={selectedTaskId} tasks={tasks} onClose={handleTaskClose} onCompleted={onCompleted}/>}
    </>
  );
}

//localStorage.removeItem('tasks'); // Testing
export default App;
