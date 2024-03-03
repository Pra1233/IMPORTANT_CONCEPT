import React from "react";
//it allow use to wrap another component and  all content which is pass inside a wrap is show in children
const MyComponent = (props) => {
  return (
    <>
      <h1>My component</h1>
      <div>{props.children}</div>;
    </>
  );
};

const ChildrenProp = () => {
  return (
    <>
      <MyComponent>
        <h2>ChildrenProp</h2>
      </MyComponent>
    </>
  );
};

export default ChildrenProp;
