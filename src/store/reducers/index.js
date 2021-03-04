import { combineReducers } from "redux";
import calculate from "./calculate";
import feedback from "./feedback";

export default combineReducers({
  calculate,
  feedback,
});
