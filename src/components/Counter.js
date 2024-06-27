import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "50px" }}>
      <h1>Value: {value}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "20px" }}
      >
        Increase
      </button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default Counter;
