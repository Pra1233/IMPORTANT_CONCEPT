import React, { useState } from "react";

const AuthContext = React.createContext({
  login: false,
  setLogin: () => {},
  name: "",
  setName: () => {},
});

export const AuthProvider = (props) => {
  const [login, setLogin] = useState("Not Login");
  const [name, setName] = useState("");

  const setLoginHandler = (name) => {
    setLogin(`${name}- Login Successfull`);
  };

  const setNameHandler = (name) => {
    setName(name);
  };

  const values = {
    login: login,
    setLogin: setLoginHandler,
    name: name,
    setName: setNameHandler,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
