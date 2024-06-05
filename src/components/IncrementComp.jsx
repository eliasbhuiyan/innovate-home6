import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";

const IncrementComp = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>+</button>;
};

export default IncrementComp;
