import { combineReducers } from "redux";
import authReducer from '../../modules/login/store/reducer'


const rootReducer =  combineReducers({
  authReducer
});

export default rootReducer;
