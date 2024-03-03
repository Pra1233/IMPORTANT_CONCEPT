const initialState = { count: 0 };
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increase":
      return { count: state.count + action.payload };

    default:
      return state;
  }
};
export default countReducer;
