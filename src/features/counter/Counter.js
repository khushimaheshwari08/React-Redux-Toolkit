import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const themeTextColor = useSelector((state) => state.theme.color);

  return (
    <div>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span className="value" style={{ color: themeTextColor }}>
        Count:{count}
      </span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment by 10
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
      >
        Decrement by 10
      </button>
    </div>
  );
};

export default Counter;
