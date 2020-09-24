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
