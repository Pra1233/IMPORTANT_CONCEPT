import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleChild = useCallback(() => {
    console.log("child");
  }, []);
  // handleClick is function it will be recreated every render so use  UseCallback to solve problem
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>

      <Child handleChild={handleChild} />
    </>
  );
};

export default UseCallback;
