import React, { useRef } from "react";

const Ref = () => {
  const text = useRef(null);

  return (
    <>
      {/* important  */}
      <input type="text" ref={text} />
      <button
        onClick={() => {
          text.current.focus();
          console.log(text.current.value);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Ref;
