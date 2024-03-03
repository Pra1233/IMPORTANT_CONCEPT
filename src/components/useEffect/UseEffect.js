import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [posts, setPosts] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect render");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data[count].title))
      .catch((e) => console.log(e));
  }, [count]);
  return (
    <>
      <h1>{posts}</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default UseEffect;
