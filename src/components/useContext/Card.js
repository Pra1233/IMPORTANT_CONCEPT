import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import CardContext from "../../store/card-context";

const Card = () => {
  const val = useRef(null);
  const cardCtx = useContext(CardContext);
  console.log(cardCtx.amount, "amount");

  const sendHandler = () => {
    cardCtx.setAmount(val.current.value);
  };

  return (
    <>
      {cardCtx.amount > 0 && <h1>{cardCtx.amount}</h1>}
      <input type="text" ref={val} />
      <button onClick={sendHandler}>Send</button>
    </>
  );
};

export default Card;
