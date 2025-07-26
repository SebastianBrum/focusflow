import style from './tasks.module.css';

// Component to display list of all tasks
export default function Tasks({ onClick, tasks}) {
    return (   
        <div className={style.taskContainerWrapper}>
        <h1>Tasks</h1>
        <div className={style.taskContainer}>
            {/* Map through tasks and render each one */}
            {tasks.map((task) => (
            <div key={task.id} className={style.task} onClick={() => onClick(task.id)}>
                <h2>{task.title}</h2>
                {/* Only show category if it exists */}
                {task.category !== '' && <p>-{task.category}</p>}
            </div>
        ))}
        
        </div>
        </div> 
    )
}