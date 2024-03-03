import { configureStore } from "@reduxjs/toolkit";
import count from "./count";

const store = configureStore({
  count: count,
});
export default store;
