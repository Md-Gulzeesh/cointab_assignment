import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { userReducer } from "./user.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  data: userReducer,
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
