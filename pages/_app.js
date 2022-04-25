import "../styles/global.scss";
import React from "react";
import { wrapper } from "../redux-files/store";

//this const is usually a non-arrow function with parenthesis
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// export default MyApp w redux wrapper;
export default wrapper.withRedux(MyApp);
