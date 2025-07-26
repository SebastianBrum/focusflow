import style from './tasks.module.css';

export default function Tasks({ onClick, tasks}) {
    return (   
        <div className={style.taskContainerWrapper}>
        <h1>Tasks</h1>
        <div className={style.taskContainer}>
            {tasks.map((task) => (
            <div key={task.id} className={style.task} onClick={() => onClick(task.id)}>
                <h2>{task.title}</h2>
                {task.category !== '' && <p>-{task.category}</p>}
            </div>
        ))}
        
        </div>
        </div> 
    )
}