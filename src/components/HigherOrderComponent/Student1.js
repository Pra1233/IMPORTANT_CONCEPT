import React from "react";
import HigherOrderComponent from "./Hoc1";

const Student1 = (props) => {
  return (
    <>
      <h1>{props.num}</h1>
      <button onClick={props.handleEvent}>Student1</button>
    </>
  );
};

export default HigherOrderComponent(Student1); //passing
