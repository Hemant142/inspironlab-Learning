import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, task: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      const updatedText = action.payload.editText;

      state.todos = state.todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: updatedText };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
