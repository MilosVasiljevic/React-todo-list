import { createContext, useContext, useReducer } from 'react'; // omogucava context i reducer

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {

    // pravi reducer, inicijalna vrednost je na dnu,
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

// funckionalnost, dodaje menja, i brise
// prihvata vrednosti tasks (listu taskova) i akciju
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// defaultne vrednosti
const initialTasks = [
  { id: 0, text: 'Izvedi psa', done: true },
  { id: 1, text: 'Nahrani mačku', done: false },
  { id: 2, text: 'Operi sudove', done: false }
];
