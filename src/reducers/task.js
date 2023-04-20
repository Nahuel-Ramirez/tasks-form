import { ACTIONS } from "../actions/task";

export const initialState = {
  tasks: [],
  selectedTask: {},
  loading: false,
  owner: { id: 1, name: "Nahuel Ramirez", mail: "nahuel-ramirez@hotmail.com" },
};

// const [state, dispatch] = useReducer(taskReducer, initialState)
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ACTIONS.GET_TASK: {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      return {
        ...state,
        selectedTask,
      };
    }
    case ACTIONS.DELETE_TASK: {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      return state;
  }
};
