import { compose, createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";

import { rootReducer } from "./rootReducer";

// logger - allow us to see what the state looks like before an action is dispatched, how the state looks after the action

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type ", action.type);
  console.log("payload ", action.type);
  console.log("currentState ", store.getState());

  next(action);

  //   new state
  console.log("next state ", store.getState());
};

const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// undefined is a optional second parameter
export const store = createStore(rootReducer, undefined, composedEnhancers);
