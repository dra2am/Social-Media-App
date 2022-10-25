import axios from "axios";
import { authUser, userDataServer } from "../actions";

export const loginOnFormSubmit = (username, password) => async (dispatch) => {
    // make req to server
    await axios
      .post("https://express-backend-all-curls.herokuapp.com/users/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res)
        //store token + user in local storage
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("user", username)
        //authenticate user
        dispatch(authUser());
        dispatch(userDataServer({email: username, password: password}))
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
      //store token + user in local storage
      window.localStorage.setItem("token", res.data.token);
      window.localStorage.setItem("user", email)
      //authenticate user
      dispatch(authUser());
      dispatch(userDataServer({email: email, password: password}))
    })
    .catch((e) => {
        console.log(e);
    });
}