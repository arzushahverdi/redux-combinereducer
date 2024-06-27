import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
