import React, { useState } from "react";

const HigherOrderComponent = (Student) => {
  //component
  const HigherInner = () => {
    const [num, setNum] = useState(0);

    const handleEvent = () => {
      //callback function
      setNum(num + 10);
    };

    return <Student num={num} handleEvent={handleEvent} />;
  };

  return HigherInner;
};

export default HigherOrderComponent;
