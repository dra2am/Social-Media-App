export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (name, qty) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name,
      qty
    }
  }
}

export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}

export const SERVER_ACTION = 'SERVER_ACTION'
export const userDataServer = (user) => {
  return {
    type: SERVER_ACTION,
    payload: {
      user,
    },
  };
};

export const AUTH_USER = "AUTH_USER"
export const authUser = () => {
  return {
    type: AUTH_USER,
  };
};

export const LOGOUT = "LOGOUT"
export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      user: {}
    }
  };
};

export const DISPLAY_MESSAGE = "DISPLAY_MESSAGE";
export const displayMessage = (msg) => {
  return {
    type: DISPLAY_MESSAGE,
    payload: msg
  }
}
