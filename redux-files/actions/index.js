export const userDataServer = (user) => {
  return {
    type: "SERVER_ACTION",
    payload: {
      user,
    },
  };
};

export const userDataClient = (user) => {
  return {
    type: "CLIENT_ACTION",
    payload: {
      user,
    },
  };
};

export const authUser = () => {
  return {
    type: "AUTH_USER",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
