import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import reducers from "../reducers/index.js";

const middleWare = [thunk];
const initialState = {};

const Store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(...middleWare)));

export default Store;