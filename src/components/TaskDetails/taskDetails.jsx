import style from './taskDetails.module.css';
import Button from '../button.jsx';
import Pomodoro from './Pomodoro clock/Pomodoro.jsx';
import Quote from '../SideBar/InspirationalQuote/InspirationalQuote.jsx'
import React, { useState } from 'react';

// Memoized Quote component to prevent unnecessary re-renders
const MemoQuote = React.memo(Quote);

export default function TaskDetails({ id, tasks, onClose, onCompleted}) {
    // State for Pomodoro timer settings
    const [pomodoroTime, setPomodoroTime] = useState({
        work: 15,
        break: 3
    });
    
    // Find the specific task by ID
    const task = tasks.find(t => t.id === id);
    
    // Predefined Pomodoro time options
    const pomodoroOptions = [
        { label: "15 / 3 minutes", value: "15/3", workMinutes:15, breakMinutes: 3 },
        { label: "25 / 5 minutes", value: "25/5", workMinutes:25, breakMinutes: 5 },
        { label: "50 / 10 minutes", value: "50/10", workMinutes:50, breakMinutes: 10 },
        { label: "60 / 15 minutes", value: "60/15", workMinutes:60, breakMinutes: 15 },
        { label: "90 / 20 minutes", value: "90/20", workMinutes:90, breakMinutes: 20 },
        { label: "120 / 30 minutes", value: "120/30", workMinutes:120, breakMinutes: 30 }
    ]

    // Handle Pomodoro time selection change
    function handlePomodoroChange(e) {
    const selectedValue = e.target.value;
    const selectedOption = pomodoroOptions.find(option => option.value === selectedValue);
    
    if (selectedOption) {
        setPomodoroTime({
            work: selectedOption.workMinutes,
            break: selectedOption.breakMinutes
        });
    }
}

    return (
        <div className={style["task-details"]}>
            <h2>{task.title}</h2>
            <p>Date to complete : {task.dateComplete}</p>
            {/* Pomodoro timer component */}
            <Pomodoro initialMinutes={pomodoroTime.work} initialSeconds={0} handlePomodoroChange={handlePomodoroChange} pomodoroOptions={pomodoroOptions}/>
            <div className={style['bottom-container']}>
            {/* Task description with checkboxes */}
            <div className={style.description}>
                <h3>Description</h3>
            <ul>
                {/* Render description items if they exist */}
                {task.description.length > 0 && task.description.map((description, index) => (
                    <div className={style.descriptionList}>
                      <li key={index}>{description}</li>
                      <input type='checkbox'/>
                    </div>
                ))}

            </ul>   
            </div>
            {/* Right side functions */}
            <div className={style['functions']}>
            <MemoQuote main={false}/>
            <div className={style['function-buttons']}>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={() => {onClose(); onCompleted(task.id)}}>Completed</Button>
            </div>
            </div>
            </div>
        </div>
    )
}           