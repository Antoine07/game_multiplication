import { combineReducers } from "redux";
import calculate from "./calculate";
import feeback from "./feeback";

export default combineReducers({
  calculate,
  feeback,
});
