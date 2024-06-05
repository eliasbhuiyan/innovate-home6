import React from "react";
import { useDispatch } from "react-redux";
import { dicrement } from "../redux/counterSlice";

const DicrementComp = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(dicrement())}>-</button>;
};

export default DicrementComp;
