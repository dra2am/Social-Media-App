import { useRouter } from "next/router";
import { displayMessage, authUser } from "../actions";

const router = useRouter();

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
        //redirect to products page
        router.push("/");
      })
      .catch((err) => {
        const msg = "Invalid username or password"
        dispatch(displayMessage(msg))
        console.log(err);
      });
}

export const signUpOnSubmit = (email, password) = async (dispatch) => {
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
      //redirect to profile page
      router.push("/");
    })
    .catch((e) => {
        const msg = "Error with sign up"
        dispatch(displayMessage(msg))
        console.log(e);
    });
}