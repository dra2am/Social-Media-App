import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "react-redux";
import { authUser } from "../redux-files/actions/index";
// import styles from "../styles/Home.module.css";

const Login = () => {
  //redirect user
  const router = useRouter();

  //stores inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //access store
  const store = useStore();

  //get input from username
  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  //get input from password
  const onPassChange = (event) => {
    setPassword(event.target.value);
  };

  //prevent default behavior and contact server
  const onFormSubmit = async (event) => {
    event.preventDefault();

    // make req to server
    await axios
      .post("http://localhost:3001/users/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        //store token in local storage
        window.localStorage.setItem("token", res.data.token);
        //authenticate user
        store.dispatch(authUser());
        //redirect to profile page
        router.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //for a faster transition
  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    router.prefetch("/products");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>InstaClone Sign in</title>
        {/* change this icon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='signup justify-center border rounded p-10 bg-gray-200' onSubmit={onFormSubmit}>
      <h1 className="font-bold text-3xl text-center ">Log In</h1>
        <form>
          <input
            className="block m-3 p-1"
            type='email'
            required
            placeholder='username or email'
            onChange={onUsernameChange}
          ></input>
          <input
          className="block m-3 p-1"
            type='password'
            required
            placeholder='password'
            onChange={onPassChange}
          ></input>
          <button type='submit' className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
        </form>

        <div className='create-acc m-3'>
          <p>
            Don't have an account?{" "}<br></br>
            <Link href='/user/register'>
              <a className="text-blue-500 hover:text-blue-700">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
