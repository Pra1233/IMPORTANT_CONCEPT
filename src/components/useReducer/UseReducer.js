import React, { useReducer } from "react";

const ACIONS={
  INCREMENT:"increment",
  TOGGLETEXT:"toggleText",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACIONS.INCREMENT:
      return { count: state.count + 1, text: state.text };

    case ACIONS.TOGGLETEXT:
      return { count: state.count, text: !state.text };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: true });

  return (
    <>
      <h2>{state.count}</h2>
      {state.text && <span>Hello UseReducer</span>}
      <button
        onClick={() => {
          dispatch({ type: ACIONS.INCREMENT });
          dispatch({ type: ACIONS.TOGGLETEXT });
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseReducer;
