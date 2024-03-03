import React from "react";
import { useState } from "react";
import useUpdateHook from "./UpdateHooks";

const Input = () => {
  const [text, setText] = useState("");
  useUpdateHook(text);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default Input;
