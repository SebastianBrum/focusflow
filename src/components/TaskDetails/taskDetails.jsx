import style from './taskDetails.module.css';
import Button from '../button.jsx';
import Pomodoro from './Pomodoro.jsx';
import { useState } from 'react';


export default function TaskDetails({ id, tasks, onClose, onCompleted}) {
    const [pomodoroTime, setPomodoroTime] = useState({
        work: 25,
        break: 5
    });
    const task = tasks.find(t => t.id === id);
    const pomodoroOptions = [
        { label: "15 / 3 minutes", value: "15/3", workMinutes:15, breakMinutes: 3 },
        { label: "25 / 5 minutes", value: "25/5", workMinutes:25, breakMinutes: 5 },
        { label: "50 / 10 minutes", value: "50/10", workMinutes:50, breakMinutes: 10 },
        { label: "60 / 15 minutes", value: "60/15", workMinutes:60, breakMinutes: 15 },
        { label: "90 / 20 minutes", value: "90/20", workMinutes:90, breakMinutes: 20 },
        { label: "120 / 30 minutes", value: "120/30", workMinutes:120, breakMinutes: 30 }
    ]

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
            <h4>{task.category}</h4>
            <p>{task.dateComplete}</p>
            <ul>
                {task.description.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
            <select onChange={handlePomodoroChange}>
                {pomodoroOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={() => {onClose(); onCompleted(task.id)}}>Completed</Button>   
            <Button>Edit</Button>
            <Pomodoro initialMinutes={pomodoroTime.work} initialSeconds={0}/>
        </div>
    )
}           