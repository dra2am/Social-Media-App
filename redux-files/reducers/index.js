import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

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

export const allReducers = combineReducers({
  userData,
});
