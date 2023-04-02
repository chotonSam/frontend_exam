import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filters/actions";

const lengthHandler = (todoNumber) => {
  switch (todoNumber) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${todoNumber} tasks`;
  }
};

const Footer = () => {
  const filters = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todos);

  const todoRemining = todos.filter((todo) => !todo.completed).length;

  const { status } = filters;

  const dispatch = useDispatch();

  const statusHandler = (statusName) => {
    dispatch(statusChange(statusName));
  };


  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{lengthHandler(todoRemining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => {
            statusHandler("All");
          }}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => {
            statusHandler("Incomplete");
          }}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => {
            statusHandler("Complete");
          }}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
      </ul>
    </div>
  );
};

export default Footer;
