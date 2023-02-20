import { useState } from "react";


export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        //para guardar en el navegador
        // localStorage.setItem('tasks', newTaskName)
        //para reiniciar el formulario
        setNewTaskName('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ingrese una nueva tarea"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Guardar tarea</button>

        </form>
    )
}

