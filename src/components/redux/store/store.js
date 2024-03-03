import rootReducer from "./index";
import { applyMiddleware, legacy_createStore as createStore } from "redux";

const middleware = (store) => (next) => (action) => {
  console.log(action.payload, "middleware");
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;
