const { createStore } = require("redux");
// constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialState = {
  count: 0,
};

// action
const action = (acctionType) => {
  return {
    type: acctionType,
  };
};

// reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

// store
const store = createStore(countReducer);

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// action dispatch

store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
store.dispatch(action(INCREMENT));
