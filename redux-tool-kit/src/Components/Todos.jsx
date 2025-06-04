import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todo.Slice";

export default function Todos() {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos, "Todos");
  const handleUpdate = (id) => {
    setEditId(id);
    dispatch(updateTodo({id, editText}))
     setEditId(null);
    setEditText("");
  };
  return (
    <div>
      <AddTodo />
      <div className="space-y-4 mt-6">
        {todos.length > 0 ? (
         
            todos.map((ele) => (
              <div
                key={ele.id}
                className="flex item-center justify-between bg-white  shadow rounded-lg p-4"
              >
                {editId == ele.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-2 flex-1 mr-2"
                  />
                ) : (
                  <h1 className="text-lg font-medium text-gray-800 flex-1">
                    {" "}
                    Task:{ele.task}
                  </h1>
                )}

                {editId == ele.id ? (
                  <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded mr-2" onClick={() => handleUpdate(ele.id)}>Save</button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(ele.id);
                      setEditText(ele.task);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded mr-2"
                  >
                    Update
                  </button>
                )}
                <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded" onClick={() => dispatch(removeTodo(ele.id))}>
                  Delete
                </button>
              </div>
            ))
         
        ) : (
          <div className="text-gray-500 text-center">No data</div>
        )}
      </div>
    </div>
  );
}
