import AddTask from './test/AddTask.js';
import TaskList from './test/TaskList.js';
import { TasksProvider } from './test/TasksContext.js';

export default function TaskApp() {
  return ( // poziva f-ju tasks provider, sve unutar njega je children varijabla
    <TasksProvider> 
      <h2>Lista taskova</h2>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

