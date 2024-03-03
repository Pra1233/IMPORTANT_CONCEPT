import React, { useState } from "react";

const NameContext = React.createContext({
  name: "",
  setName: () => {},
});

export const NameProvider = (props) => {
  const [name, setName] = useState("Ashok");

  const setNameHandler = (data) => {
    setName(data);
  };

  const values = {
    name: name,
    setNameHandler: setNameHandler,
  };

  return (
    <NameContext.Provider value={values}>{props.children}</NameContext.Provider>
  );
};

export default NameContext;
