import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
        className='change'
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button className='save' onClick={() => setIsEditing(false)}>
          Sačuvaj
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className='edit'
        onClick={() => setIsEditing(true)}>
          Izmeni
        </button>
        
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button 
      className='delete'
      onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Obriši
      </button>
    </label>
  );
}
