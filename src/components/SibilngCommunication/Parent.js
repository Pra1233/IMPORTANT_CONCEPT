import React, { useState } from "react";
import Sibing1 from "./Sibing1";
import Sibing2 from "./Sibling2";

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Sibing1 value={count} handleClick={handleClick} />
      <Sibing2 value={count} handleClick={handleClick} />
    </>
  );
};

export default Parent;
