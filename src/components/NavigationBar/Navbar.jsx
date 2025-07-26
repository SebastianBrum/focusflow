import { useState, useEffect } from 'react';
import styles from './navbar.module.css';

export default function Navbar({ onAddTaskClick }){
    // State to track current theme mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    // Toggle between light and dark themes
    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        // Apply theme to document root
        document.documentElement.setAttribute('data-theme', newTheme);
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
    };

    return(
        <ul className={styles.navbar}>
            <li>Dashboard</li>
            <li onClick={onAddTaskClick}>Add Task</li>
            <li onClick={toggleDarkMode}>
                {/* Dynamic button text based on current theme */}
                {isDarkMode ? 'Light' : 'Dark'}
            </li>
        </ul>
    )
}