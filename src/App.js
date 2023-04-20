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

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} />
    </div>
  );
}

export default App;
