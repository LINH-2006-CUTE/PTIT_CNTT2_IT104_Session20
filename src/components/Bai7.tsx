import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Số đếm: {count}</h1>
      <button onClick={() => dispatch("increment")}>Tăng</button>
      <button onClick={() => dispatch("decrement")}>Giảm</button>
    </div>
  );
}

export default Counter;
