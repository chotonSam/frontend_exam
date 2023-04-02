import { STATUS } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUS,
    payload: status,
  };
};