import React, { useState } from "react";
import HigherOrderComponent from "./Hoc1";

const Student2 = (props) => {
  return (
    <>
      <h1>{props.num}</h1>
      <button onClick={props.handleEvent}>Student2</button>
    </>
  );
};

export default HigherOrderComponent(Student2);
