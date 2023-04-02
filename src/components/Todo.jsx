import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../redux/todos/actions";
import { cancelImg } from "./Image";

const Todo = ({ todo }) => {
  const { id, title, completed, } = todo;
  const dispatch = useDispatch();

  const toggleHandler = (todoId) => {
    dispatch(toggle(todoId));
  };

  const deleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input
          onClick={() => toggleHandler(id)}
          defaultChecked={completed}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {title}
      </div>

      <img
        onClick={() => deleteHandler(id)}
        src={cancelImg}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
