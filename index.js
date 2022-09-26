const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
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
const action = (actionType, payload = {}) => {
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
      return state.users;

    default:
      return state;
  }
};

// reducer for products
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (Object.keys(action.payload).length !== 0) {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    case GET_PRODUCTS:
      return state.products;

    default:
      return state;
  }
};

// rootReducer

const rootReducer = combineReducers({
  countR: countReducer,
  productsR: productsReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// action dispatch - user and counter

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
// store.dispatch(action(GET_USERS));

// action dispatch for products

store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook \pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook pro" }));
store.dispatch(action(ADD_PRODUCT, { name: "macbook" }));
// store.dispatch(action(GET_PRODUCTS));
