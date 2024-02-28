import styled from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <>
      <h1 className="app"> Todo List</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};
