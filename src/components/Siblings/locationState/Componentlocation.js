import React from "react";
import { useLocation } from "react-router-dom";

const ComponentB = () => {
  const location = useLocation();
  console.log(location);
  let name = location.state && location.state.name;
  return <div>{name}</div>;
};

export default ComponentB;
