import { Button, List } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../action/Action";

function Todo() {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();
  let todoFromStore = useSelector((state) => state.todo.list);
  let updateInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>To-Do App</h1>
      <input
        name="todo"
        placeholder="Enter the task"
        value={input}
        onChange={(e) => {
          updateInput(e);
        }}
      />
      <Button
        onClick={() => {
          dispatch(add(input));
          setInput("");
        }}>
        add
      </Button>
      <div>
        {todoFromStore.map((value, index) => {
          return <List key={index}>{value}</List>;
        })}
      </div>
    </div>
  );
}

export default Todo;
