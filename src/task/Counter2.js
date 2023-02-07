import React, { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
let reducer = (prevState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter + action.payload,
      };
    case "DECREMENT":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter - action.payload,
      };
    case "RESET":
      return { ...prevState, firstCounter: initialState.firstCounter };

    case "INCREMENT2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter + action.payload,
      };
    case "DECREMENT2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter - action.payload,
      };
    case "RESET2":
      return { ...prevState, secondCounter: initialState.secondCounter };
    default:
      return prevState;
  }
};
function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>CounterOne: {state.firstCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 50 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 30 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>

      <h1>CounterTwo: {state.secondCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT2", payload: 100 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT2", payload: 50 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET2" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;