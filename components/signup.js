import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useStore } from "react-redux";
import { authUser } from "../redux-files/actions";

const SignUp = () => {
  //store the state of inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  //use redux store and next router
  const store = useStore();
  const router = useRouter();

  //upon change of each input, store the value
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPassChange = (event) => {
    setPass(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  //upon submission, attempt to post user to server
  const onFormSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:3001/users/signup", {
        email: email,
        password: pass,
        name: name,
      })
      .then((res) => {
        //store token in local storage
        window.localStorage.setItem("token", res.data.token);
        //authenticate user
        store.dispatch(authUser());
        //redirect to profile page
        router.push("/user/profile");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          required
          type='email'
          placeholder='email'
          onChange={onEmailChange}
        ></input>
        <input
          required
          type='password'
          placeholder='password'
          onChange={onPassChange}
        ></input>
        <input
          required
          type='text'
          placeholder='name'
          onChange={onNameChange}
        ></input>
        <button type='submit'>Create Account</button>
      </form>

      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default SignUp;
