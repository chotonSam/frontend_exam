import {
  ADD,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  DELETE,
  TOGGLE
} from "./actionTypes";
import initialState from "./initialState";

const nextTOdoId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  return maxID + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {


    case ADD:
      return [
        ...state,
        {
          id: nextTOdoId(state),
          title: action.payload,
          completed: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETE:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
