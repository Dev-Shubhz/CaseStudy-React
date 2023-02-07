import { applyMiddleware, compose, createStore } from "redux";
import Root from "./redux/reducers/Root";
import ReduxThunk from "redux-thunk";
import TodoReducer from "./redux/reducers/TodoReducer";

let Store1 = createStore(
  Root,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default Store1;
