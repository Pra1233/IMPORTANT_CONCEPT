import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);

  const loginHandler = () => {};

  return (
    <>
      <input type="text" />
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
