const { createStore } = require("redux");
// constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const GET_USERS = "GET_USERS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

// state
const initialState = {
  users: [],
  count: 0,
};

const initialProductsState = {
  products: [],
};

// action
const action = (actionType, payload) => {
  return {
    type: actionType,
    payload,
  };
};

// reducer for user and counter
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
    case ADD_USER:
      if (Object.keys(action.payload).length !== 0) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }

    case GET_USERS:
      return {
        ...state.users,
      };

    default:
      return state;
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
store.dispatch(action(ADD_USER, { name: "md zihad" }));
store.dispatch(action(ADD_USER, { name: "md kowser" }));
store.dispatch(action(ADD_USER, { name: "md kader" }));
store.dispatch(action(ADD_USER, { name: "md ridoy" }));
store.dispatch(action(ADD_USER, { name: "md rony" }));
store.dispatch(action(GET_USERS));
