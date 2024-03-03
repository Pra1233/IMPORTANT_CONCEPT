import React, { useRef, useState } from "react";

const Reff = () => {
  const name = useRef();

  return (
    <>
      <input type="text" ref={name} />
      <button
        onClick={() => {
          console.log(name.current.value);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Reff;
