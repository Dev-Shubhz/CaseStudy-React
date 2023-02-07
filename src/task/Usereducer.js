
import { Button } from "@mui/material";
import React, { useReducer } from "react";

let initialState = 0;
let reducer = (prevState, action) => {
  console.log("prevstate", prevState);
  switch (action) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    case "RESET":
      return initialState;
    default:
      return prevState;
  }
};
export default function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>CounterOne: {state}</h1>
      <Button variant="outlined" color="success"
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </Button>
      <Button variant="outlined" color="error"
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </Button>
      <Button variant="outlined" color="secondary"
        onClick={() => {
          dispatch("RESET");
        }}
      >RESET</Button>
      </div>
    )}