import { combineReducers } from "redux";
import authModal from "@/redux/actions/authModalReducer";
import auth from "./authReducer";
import global from "./globalReducer";

export const rootReducer = combineReducers({
  authModal,
  auth,
  global,
});
