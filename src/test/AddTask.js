import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        className='input'
        placeholder="Dodaj task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button 
      className='add'
      onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Dodaj</button>
    </>
  );
}

let nextId = 3;
