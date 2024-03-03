import React from "react";

const Sibing1 = (props) => {
  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={props.handleClick}>Click</button>
    </>
  );
};

export default Sibing1;
