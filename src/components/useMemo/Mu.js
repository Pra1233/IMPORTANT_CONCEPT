import React, { useState } from "react";
import { useMemo } from "react";

const USEMemo = () => {
  const [val, setVal] = useState(0);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    let sum = 0;
    console.log("calculation");
    sum = val * val * val;
    return sum;
  }, [val]);

  return (
    <>
      <input
        type="number"
        value={val}
        onChange={(e) => {
          setVal(Number(e.target.value));
        }}
      />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      {/* <h2>{result()}</h2>   without memo  */}
      <h2>{result}</h2>
      {/* we are accressing result directly because store cached value in result */}
    </>
  );
};
export default USEMemo;
