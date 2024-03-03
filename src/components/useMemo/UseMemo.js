import React from "react";
import { useMemo } from "react";
import { useState } from "react";
// This is a hook provided by React. You can use `useMemo` to memoize the result of a function so that it's only
//  recomputed when one of the dependencies changes. This can be useful for optimizing expensive computations or
//  calculations within a component, ensuring that they are only recalculated when necessary.

const UseMemo = () => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState(0);
  const Calculation = useMemo(() => {
    console.log("Calculation");
    let sum = 0;
    for (let i = 0; i <= input; i++) {
      sum += i * i;
    }
    return sum;
  }, [input]);

  return (
    <>
      {toggle && <h1>Hello </h1>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <h1>{Calculation}</h1>
    </>
  );
};

export default UseMemo;
