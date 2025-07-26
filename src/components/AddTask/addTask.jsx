// addTask.jsx
import { useEffect, useState } from 'react';
import style from './addTask.module.css';
import Input from '../input.jsx';
import Button from '../button.jsx';

export default function AddTask({ onClose, setTask, task, handleSubmit }) {
    const [descriptionInput, setDescriptionInput] = useState('');
    const inputValues = {
        title: {
            type: 'text', 
            id: 'task-title', 
            onChange: (e) => setTask(prev => ({...prev, title: e.target.value})),
            placeholder: 'Title*',
            required: true
        },
        description: {
            type: 'text', 
            id: 'task-description', 
            onChange: (e) => setDescriptionInput(e.target.value),
            placeholder: 'Description'
        },
        date: {
            type: 'date', 
            id: 'task-date-complete', 
            onChange: (e) => setTask(prev => ({...prev, dateComplete: e.target.value})),
            placeholder: 'Date to complete'
        },
        category: {
            type: 'text', 
            id: 'task-category', 
            onChange: (e) => setTask(prev => ({...prev, category: e.target.value})),
            placeholder: 'Category'
        },
        highImportance: {
            type: 'radio', 
            id: 'task-importance-high', 
            onChange: () => setTask(prev => ({...prev, importance: 'high'})),
            placeholder: 'High Importance',
            name: 'task-importance'
        },
        mediumImportance: {
            type: 'radio', 
            id: 'task-importance-medium', 
            onChange: () => setTask(prev => ({...prev, importance: 'medium'})),
            placeholder: 'Medium Importance',
            name: 'task-importance'
        },
        lowImportance: {
            type: 'radio', 
            id: 'task-importance-low', 
            onChange: () => setTask(prev => ({...prev, importance: 'low'})),
            placeholder: 'Low Importance',
            name: 'task-importance'
        }
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    function handleDescriptionAdd() {
        if (descriptionInput.trim() === '') return;

        setTask(prev => ({
            ...prev,
            description: [...(Array.isArray(prev.description) ? prev.description : []), descriptionInput]
        }));

        setDescriptionInput('');
        document.getElementById('task-description').value = '';
        document.getElementById('task-description').focus();
    }

    return(
        <div className={style["modal-overlay"]}>
            <div className={style["addTask-container"]}>
                <div className={style["modal-header"]}>
                    <Button onClick={onClose} id={style['back']}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </Button>
                    <h1>Add task</h1>
                </div>
                
                <div className={style["modal-content"]}>
                    <div className={style["form-section"]}>
                        <Input {...inputValues.title} />
                    </div>
                    
                    <div className={style["form-section"]}>
                        <div className={style['task-description']}>
                            <Input {...inputValues.description} />
                            <Button onClick={handleDescriptionAdd}>Add Description</Button>
                        </div>
                    </div>
                    
                    <div className={style["form-section"]}>
                        <Input {...inputValues.date} />
                    </div>
                    
                    <div className={style["form-section"]}>
                        <Input {...inputValues.category} />
                    </div>
                    
                    <div className={style["form-section"]}>
                        <div className={style['task-importance']}>
                            <h4>Task importance</h4>
                            <div className={style['importance-options']}>
                                <Input {...inputValues.highImportance} />
                                <Input {...inputValues.mediumImportance} />
                                <Input {...inputValues.lowImportance} />
                            </div>
                        </div>
                    </div>
                    
                    <div className={style["form-section"]}>
                        <Button onClick={() => {handleSubmit(task); onClose();}} id={style['add-task']}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}