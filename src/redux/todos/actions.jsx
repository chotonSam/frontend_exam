import {
  ADD,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  DELETE,
  TOGGLE
} from "./actionTypes";



export const add = (todoText) => {
  return {
    type: ADD,
    payload: todoText,
  };
};


export const allComplete = () => {
  return {
    type: ALLCOMPLETE,
  };
};

export const clearComplete = () => {
  return {
    type: CLEARCOMPLETE,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};



export const toggle = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};
