import { useEffect, useState } from 'react';
import style from './addTask.module.css';
import Input from '../input.jsx';
import Button from '../button.jsx';

export default function AddTask({ onClose, setTask, task, handleSubmit }) {
    // Local state for description input to handle multiple descriptions
    const [descriptionInput, setDescriptionInput] = useState('');
    
    // Configuration object for all form inputs with their properties
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
            placeholder: 'Description',
            required: false
        },
        date: {
            type: 'date', 
            id: 'task-date-complete', 
            onChange: (e) => setTask(prev => ({...prev, dateComplete: e.target.value})),
            placeholder: 'Date to complete',
            required: false
        },
        category: {
            type: 'text', 
            id: 'task-category', 
            onChange: (e) => setTask(prev => ({...prev, category: e.target.value})),
            placeholder: 'Category',
            required: false
        },
        // Radio button group for task importance levels
        highImportance: {
            type: 'radio', 
            id: 'task-importance-high', 
            onChange: () => setTask(prev => ({...prev, importance: 'high'})),
            placeholder: 'High Importance',
            name: 'task-importance',
            required: false
        },
        mediumImportance: {
            type: 'radio', 
            id: 'task-importance-medium', 
            onChange: () => setTask(prev => ({...prev, importance: 'medium'})),
            placeholder: 'Medium Importance',
            name: 'task-importance',
            required: false
        },
        lowImportance: {
            type: 'radio', 
            id: 'task-importance-low', 
            onChange: () => setTask(prev => ({...prev, importance: 'low'})),
            placeholder: 'Low Importance',
            name: 'task-importance',
            required: false
        }
    };

    // Add event listener for ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    // Function to add description to the task's description array
    function handleDescriptionAdd() {
        // Don't add empty descriptions
        if (descriptionInput.trim() === '') return;

        // Add description to task state (handles both array and non-array cases)
        setTask(prev => ({
            ...prev,
            description: [...(Array.isArray(prev.description) ? prev.description : []), descriptionInput]
        }));

        // Clear the input field and refocus for multiple entries
        setDescriptionInput('');
        document.getElementById('task-description').value = '';
        document.getElementById('task-description').focus();
    }

    return(
        <div className={style["modal-overlay"]}>
            <div className={style["addTask-container"]}>
                {/* Modal header with close button */}
                <div className={style["modal-header"]}>
                    <Button onClick={onClose} id={style['back']}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </Button>
                    <h1>Add task</h1>
                </div>
                
                <div className={style["modal-content"]}>
                    {/* Task title input */}
                    <div className={style["form-section"]}>
                        <Input {...inputValues.title} />
                    </div>
                    
                    {/* Description input with add button */}
                    <div className={style["form-section"]}>
                        <div className={style['task-description']}>
                            <Input {...inputValues.description} />
                            <Button onClick={handleDescriptionAdd}>Add Description</Button>
                        </div>
                    </div>
                    
                    {/* Date picker */}
                    <div className={style["form-section"]}>
                        <Input {...inputValues.date} />
                    </div>
                    
                    {/* Category input */}
                    <div className={style["form-section"]}>
                        <Input {...inputValues.category} />
                    </div>
                    
                    {/* Importance level radio buttons */}
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
                    
                    {/* Submit button */}
                    <div className={style["form-section"]}>
                        <Button onClick={() =>
                            {   if (task.title === '') {
                                document.getElementById('task-title').focus();
                                return;
                            }
                                handleSubmit(task);
                                 onClose();
                                }
                            }
                            id={style['add-task']}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}