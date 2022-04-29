import "../styles/global.scss";
import React from "react";
import { wrapper } from "../redux-files/store";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
