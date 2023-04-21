import { useReducer } from "react";
import "./App.scss";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { initialState, taskReducer } from "./reducers/task";
import { ACTIONS } from "./actions/task";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: ACTIONS.SET_TASK, payload: task });
  };

  const deleteTask = (tasks) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: tasks });
    console.log(tasks);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
