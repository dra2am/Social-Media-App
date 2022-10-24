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
        //store token in local storage
        window.localStorage.setItem("token", res.data.token);
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
      //store token in local storage
      window.localStorage.setItem("token", res.data.token);
      //authenticate user
      dispatch(authUser());
      dispatch(userDataServer({email: email, password: password}))
    })
    .catch((e) => {
        console.log(e);
    });
}

// export const verifyJWT = () => async (dispatch, getState) => {
//   //await //make req to db to get user token
//   //then compare with current stored token
//   //if no match, dispatch set isauth to false
//   try {
//     const response = await axios
//     .post("https://express-backend-all-curls.herokuapp.com/users/login", {
//       //get these values from store
//       email: username,
//       password: password,
//     });

//     //get token from response
//     const token = response.token;
//     if(window.localStorage.getItem("token") === token){
//       //auth user
//     }
//   } catch (error) {
    
//   }

// }