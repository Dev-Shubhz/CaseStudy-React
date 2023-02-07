import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
let Root = combineReducers({
  todo: TodoReducer,
});
export default Root;
