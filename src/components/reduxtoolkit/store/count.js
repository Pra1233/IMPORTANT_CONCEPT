import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const count = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    count(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const countAction = count.actions;
export default count.reducer;
