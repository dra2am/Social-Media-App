import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Button } from 'react-bootstrap';
import TopNav from "../../components/TopNav";
import { useDispatch } from "react-redux";
import { signUpOnSubmit } from "../../redux-files/thunks/thunks";

const SignUp = () => {
  //store the state of inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //use next router + dispatch
  const router = useRouter();
  const dispatch = useDispatch()

  //upon change of each input, store the value
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPassChange = (event) => {
    setPass(event.target.value);
  };

  //upon submission, attempt to post user to server
  const onFormSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpOnSubmit(email, pass));
  };

  return (
    <>
    <TopNav/>
    <Container className="text-center">
      <h1 className="font-bold text-3xl text-center ">Sign Up</h1>
      <form className="text-center" onSubmit={onFormSubmit}>
        <input
          className="m-3 p-1"
          required
          type='email'
          placeholder='email'
          onChange={onEmailChange}
        ></input>
        <input
          className="m-3 p-1"
          required
          type='password'
          placeholder='password'
          onChange={onPassChange}
        ></input>
        <Button variant="primary" type="submit" className="m-3 mx-3 py-2 px-4 rounded">Create Account</Button>
      </form>

      <Link href='/login'>
          <Button variant="outline-primary" type="submit" className=" m-3">Back to login</Button>
        </Link>

    </Container>
    </>
  );
};

export default SignUp;
