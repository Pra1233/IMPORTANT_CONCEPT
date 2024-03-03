import { useEffect } from "react";
import { useState } from "react";

const ComponentLifecycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Unmounting");
    };
  }, []); //run only once after render

  useEffect(() => {
    console.log("Component Updated");
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default ComponentLifecycle;
