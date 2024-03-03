import React from "react";
import { useParams } from "react-router-dom";
const ComponentB = () => {
  let { id } = useParams();
  return (
    <div>
      ComponentB
      <h2>Merra id {id}</h2>
    </div>
  );
};

export default ComponentB;

// In React, you can pass data between sibling components using
// React Router by leveraging the URL parameters or location state.
