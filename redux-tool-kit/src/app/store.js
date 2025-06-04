import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todo.Slice";

export const store = configureStore({
  reducer: todoReducer,
});
