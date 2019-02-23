import rootReducer from '../reducers/RootReducer';

import { createStore, applyMiddleware, compose } from 'redux';


const store = createStore(rootReducer);

export default store;
