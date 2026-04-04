import { createStore } from "redux";
import countReducers from "./reducers";

const store = createStore(countReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store