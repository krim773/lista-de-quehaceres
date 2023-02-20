import React from 'react'

export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr key={task.name}>
            <td>
                {task.name}
                <input type="checkbox"
                    value={task.done}
                    onChange={() => toggleTask(task)} />
            </td>
        </tr>
    )
}
