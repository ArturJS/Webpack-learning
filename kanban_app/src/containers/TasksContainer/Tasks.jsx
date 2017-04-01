import React from 'react';
import Task from './Task';

export default ({tasks, onUpdate, onDelete}) => {
  return (
    <ul className="tasks">
      {
        tasks.map(task =>
          <li key={task.id}
              className="task">
            <Task task={task} onUpdate={onUpdate} onDelete={onDelete}/>
          </li>
        )
      }
    </ul>
  );
}
