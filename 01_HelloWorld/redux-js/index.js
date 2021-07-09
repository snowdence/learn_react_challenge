const redux = require("redux");

const BUY_CAKE = "BUY_CAKE"; // actions types

const createStore = redux.createStore;

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//(perState , action) => newState

const initialState = {
  numOfCakes: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
store.dispatch(buyCake());
