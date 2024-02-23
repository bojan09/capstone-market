import { compose, createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";

import { rootReducer } from "./rootReducer";

// logger - allow us to see what the state looks like before an action is dispatched, how the state looks after the action

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// undefined is a optional second parameter
export const store = createStore(rootReducer, undefined, composedEnhancers);
