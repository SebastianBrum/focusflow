import styles from './navbar.module.css';

export default function Navbar({ onAddTaskClick }){
    return(
    <ul className={styles.navbar}>
        <li>Dashboard</li>
        <li onClick={onAddTaskClick}>Add Task</li>
        <li>Settings</li>
    </ul>
    )
}