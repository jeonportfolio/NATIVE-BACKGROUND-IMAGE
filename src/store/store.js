import { combineReducers } from "redux";
import { favoriteListReducer } from "../reducers/favoriteReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const rootReducer = combineReducers({
    favorite:favoriteListReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;