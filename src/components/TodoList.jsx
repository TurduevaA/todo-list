import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <StyledTodoList>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </StyledTodoList>
  );
};
const StyledTodoList = styled.div`
  margin: 20px auto;
  width: 400px;
`;
