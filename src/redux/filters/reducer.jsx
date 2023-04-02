import { STATUS } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
