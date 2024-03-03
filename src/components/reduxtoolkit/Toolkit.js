import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countAction } from "./store/count";

const Toolkit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(countAction.count(2));
        }}
      >
        Click
      </button>
    </>
  );
};

export default Toolkit;
