import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);
  const Increment = () => {
    dispatch({ type: "Increase", payload: 5 });
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Click</button>
    </>
  );
};

export default Count;
