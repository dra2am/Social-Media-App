import axios from "axios";
import { displayMessage, authUser } from "../actions";

export const loginOnFormSubmit = (username, password) => async (dispatch) => {
    // make req to server
    await axios
      .post("https://express-backend-all-curls.herokuapp.com/users/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        //store token in local storage
        window.localStorage.setItem("token", res.data.token);
        //authenticate user
        dispatch(authUser());
      })
      .catch((err) => {
        console.log(err);
      });
}

export const signUpOnSubmit = (email, password) => async (dispatch) => {
    await axios
    .post(`https://express-backend-all-curls.herokuapp.com/users/signup`, {
      email,
      password,
    })
    .then((res) => {
      //store token in local storage
      window.localStorage.setItem("token", res.data.token);
      //authenticate user
      dispatch(authUser());
    })
    .catch((e) => {
        console.log(e);
    });
}