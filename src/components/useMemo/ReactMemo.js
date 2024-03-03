import React from "react";

// When props we are passing in app.js isnt changed dont  rerender child component
// It stop reloading  this page

const ReactMemo = React.memo((props) => {
  console.log("ReactMemo");
  return (
    <div>
      <h1> {props.data}</h1>
    </div>
  );
});
export default ReactMemo;
