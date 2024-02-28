import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import styled from "styled-components";

export const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTodoValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoValue.trim().length > 0) {
      const newTodo = {
        title: todoValue,
        id: Date.now().toString(),
      };
      dispatch(addTodo(newTodo));
      setTodoValue("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoValue}
        placeholder="Enter your text..."
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  button {
    padding: 8px 12px;
    font-size: 16px;
    background-color: #e269e2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #d737d7;
    }
  }
  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  }
`;
