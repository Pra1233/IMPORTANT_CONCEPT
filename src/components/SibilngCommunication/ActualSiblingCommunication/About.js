import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { myData } = useParams();

  return <div>About {myData}</div>;
};

export default About;
