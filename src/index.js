import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskList from './TaskList';



//import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <div className='cont'>
    <TaskList></TaskList>
  </div>


);

