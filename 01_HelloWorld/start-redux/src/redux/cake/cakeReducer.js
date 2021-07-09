import { BUY_CAKE } from "./cakeType";
const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - actions.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
