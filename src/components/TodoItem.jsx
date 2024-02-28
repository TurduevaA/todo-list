import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/todoSlice";
import styled from "styled-components";

export const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <StyledTodoItem>
      <li>{title}</li>
      <button onClick={() => handleDeleteTodo(id)}>delete</button>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.div`
  display: flex;
  gap: 10px;
  li {
    width: 400px;
    background-color: #f2f2f2;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
    list-style-type: none;
  }
  button {
    background-color: #6bcc6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    padding: 5px 10px;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
      background-color: #44a644;
    }
  }
`;
