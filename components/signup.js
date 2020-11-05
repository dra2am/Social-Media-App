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
    <div className="flex items-center justify-center h-screen">
      <form className="border rounded p-10 bg-gray-200" onSubmit={onFormSubmit}>
      <h1 className="font-bold text-3xl text-center ">Sign Up</h1>
        <input
          className="block m-3 p-1"
          required
          type='email'
          placeholder='email'
          onChange={onEmailChange}
        ></input>
        <input
          className="m-3 p-1 block"
          required
          type='password'
          placeholder='password'
          onChange={onPassChange}
        ></input>
        <input
          className=" m-3 p-1 block"
          required
          type='text'
          placeholder='name'
          onChange={onNameChange}
        ></input>
        <button className="block m-3 mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Create Account</button>
      <Link href='/'>
        <a className="m-3 text-blue-500 hover:text-blue-700">Back to login</a>
      </Link>
      </form>

    </div>
  );
};

export default SignUp;
