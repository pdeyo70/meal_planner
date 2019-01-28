import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { loadingReducer } from "./loadingReducer";
import { recipeReducer } from "./recipeReducer";

export default combineReducers({
  authReducer,
  loadingReducer,
  recipeReducer
});
