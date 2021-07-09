const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"; // actions types
const BUY_ICECREAM = "BUY_ICECREAM";
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

//(perState , action) => newState

const initialCakeState = {
  numOfCakes: 100,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

//cake reducer

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
//  console.log("Updated state", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
store.dispatch(buyCake());
