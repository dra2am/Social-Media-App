import { createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userData, isAuth, cart, message } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//combine reducers
const allReducers = combineReducers({
    userData,
    isAuth,
    cart, 
    message,
  });

//create store
const makeStore = (context) => createStore(
  allReducers,
  composeWithDevTools( applyMiddleware(thunk))
  );

//export assembled wrapper
export const wrapper = createWrapper(makeStore);
