import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, allComplete, clearComplete } from "../redux/todos/actions";
import { doubleTick, note, plus } from "./Image";


const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);

  const clearHandler = () => {
    dispatch(clearComplete(todos));
  };

  const completeHandler = () => {
    dispatch(allComplete());
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(add(value));
    setValue("");
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={note} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          value={value}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => {
            completeHandler();
          }}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>All Complete</span>
        </li>
        <li
          onClick={() => {
            clearHandler();
          }}
          className="cursor-pointer"
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
