import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todo.Slice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  console.log(text, "text");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    console.log("texting");
    setText("");
  };
  return (
    <div className="flex  flex-col items-center justify-center  bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">AddTodo</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md flex  gap-6"
      >
        <input
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a Task..."
          className="border border-gray-300 rounded-md px-3 py-2  text-gray-900"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
