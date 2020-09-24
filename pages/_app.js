import "../styles/globals.css";
import React from "react";
import { wrapper } from "../redux-files/store";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { allReducers } from "../redux-files/reducers/index";

// const store = createStore(allReducers);

//this const is usually a non-arrow function with parenthesis
const MyApp = ({ Component, pageProps }) => (
  // return (
  // <Provider store={store}>
  <Component {...pageProps} />
  // </Provider>
  // );
);

// export default MyApp;
export default wrapper.withRedux(MyApp);
