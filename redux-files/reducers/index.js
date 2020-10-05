import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

//stores profile information
const userData = (profile = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...profile,
        server: { ...profile.server, ...action.payload.server },
      };
    case "SERVER_ACTION":
      return {
        ...profile,
        server: { ...profile.server, user: action.payload.user },
      };
    case "CLIENT_ACTION":
      return {
        ...profile,
        client: { ...profile.client, user: action.payload.user },
      };
    default:
      return profile;
  }
};

//authenticates user after good request
const isAuth = (auth = false, action) => {
  if (action.type === "AUTH_USER") {
    //if action is of valid type, return true
    return (auth = true);
  } else if (action.type === "LOGOUT") {
    return (auth = false);
  }
  //otherwise state remains unchanged
  return auth;
};

export const allReducers = combineReducers({
  userData,
  isAuth,
});
