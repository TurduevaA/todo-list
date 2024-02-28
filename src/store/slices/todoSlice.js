import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      const newId = action.payload;
      const filteredTodo = state.todos.filter((item) => item.id !== newId);
      state.todos = filteredTodo;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
