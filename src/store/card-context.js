import React from "react";
import { useState } from "react";
const CardContext = React.createContext({
  amount: 0,
  setAmount: () => {},
});

export const CardProvider = (props) => {
  const [data, setData] = useState(0);
  const setAmountHandler = (val) => {
    setData(val);
  };

  const values = {
    amount: data,
    setAmount: setAmountHandler,
  };

  return (
    <CardContext.Provider value={values}>{props.children}</CardContext.Provider>
  );
};

export default CardContext;
