import { createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers } from "redux";
import { userData, isAuth, cart, message } from "./reducers";

//combine reducers
const allReducers = combineReducers({
    userData,
    isAuth,
    cart, 
    message,
  });

//create store
const makeStore = (context) => createStore(allReducers);

//export assembled wrapper
export const wrapper = createWrapper(makeStore);
