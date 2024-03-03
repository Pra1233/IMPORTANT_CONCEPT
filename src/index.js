import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CardProvider } from "./store/card-context";
import { AuthProvider } from "./store/auth-context";
import { Provider } from "react-redux";
import store from "./components/redux/store/store";
// import store from "./components/reduxtoolkit/store/index";
import { NameProvider } from "./store/name-context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
    <NameProvider>
      <AuthProvider>
        <CardProvider>
          <BrowserRouter>
          <App />
          </BrowserRouter>
        </CardProvider>
      </AuthProvider>
    </NameProvider>
  </Provider>
);
