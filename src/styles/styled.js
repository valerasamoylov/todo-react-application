import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #4d8fac;
  text-decoration: none;
  transition: all 0.25s ease;
  display: inline-block;
  padding: 25px 25px;
  &&:hover {
    color: #5d8cae;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
  text-align: center;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 14px;
  margin-bottom: 10px;
  outline: none;
  &&:focus {
    border-bottom: 1px solid #000;
  }
`;

export const StyledButtonSubmit = styled.button`
  display: inline-block;
  padding: 15px 35px;
  color: #fff;
  background: #4d8fac;
  transition: background 0.25s ease;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &&:hover {
    background: #5d8cae;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const ChangeTodo = styled.input`
  outline: none;
  border: none;
  :hover {
    outline: none;
  }
`;
export const CheckTodo = styled.input`
  margin-right: 5px;
`;
export const DeleteTodo = styled.span`
  color: rgb(192, 0, 0);
  float: right;
  margin-right: 15px;
  cursor: pointer;
  display: none;
  font-weight: bold;
`;
export const TaskTodo = styled.div`
  margin-left: 3px;
  margin-top: 3px;
  padding: 4px;
  :hover {
    background: lightgray;
  }
  &:hover ${DeleteTodo} {
    display: inline-block;
  }
  &.done {
    text-decoration: line-through;
  }
  &:hover ${ChangeTodo} {
    background: lightgray;
    :hover {
      background: lightgray;
    }
  }
`;
