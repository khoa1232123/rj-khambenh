import { combineReducers } from "redux";
import auth from "./authReducer";
import user from "./userReducer";
import option from "./optionReducer";
import category from "./categoryReducer";
import post from "./postReducer";
import bacsi from "./bacsiReducer";
import khoa from "./khoaReducer";
import benhnhan from "./benhnhanReducer";

const rootReducer = combineReducers({
  auth,
  user,
  option,
  category,
  post,
  bacsi,
  khoa,
  benhnhan,
});

export default rootReducer;
