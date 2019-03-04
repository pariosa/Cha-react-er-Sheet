import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/RootReducer";

const store = createStore(rootReducer);

export default store;
