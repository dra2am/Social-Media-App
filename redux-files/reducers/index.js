import { ADD_TO_CART, DELETE_FROM_CART, SERVER_ACTION, AUTH_USER, LOGOUT, DISPLAY_MESSAGE } from "../actions";
import { HYDRATE } from "next-redux-wrapper";

//handles pop up messages
export const message = (message = "", action) => {
  const { type, payload } = action;
  if (type === DISPLAY_MESSAGE) {
      return payload;
    }
  return message;
}

//handles the state of the cart
export const cart = (cart = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_TO_CART: {
      const { name, qty } = action.payload;
      return [...cart, {name, qty}];
    }
    case DELETE_FROM_CART: {
      const name = payload;
      const arr = cart.filter(product => product.name !== name);
      return arr;
    }
    default: 
      return cart;
  }
}

//stores profile information
export const userData = (profile = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return {
        ...profile,
        server: { ...profile.server, ...payload.server },
      };
    case SERVER_ACTION:
      return payload;
    case LOGOUT:
      return payload;
    default:
      return profile;
  }
};

//authenticates user after good request
export const isAuth = (auth = false, action) => {
  const { type } = action;

  switch(type){
    case AUTH_USER:
      return auth = true
    case LOGOUT:
      return auth = false
    default:
      return auth;
  }
};


