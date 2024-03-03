import React, { memo } from "react";

const Child = (props) => {
  console.log("Child run");
  // return <button onClick={props.handleChild}>Child</button>;
};

export default memo(Child);

// Child renun because with using memo also because every time because props is function
