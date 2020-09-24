import Link from "next/link";
import { useStore } from "react-redux";

//there will be a method of uploading images here
//change this to check token and return data instead?
//fetch w gssp and make user available as props?

export default function Profile() {
  const store = useStore();
  const state = store.getState();

  //displays loading or profile depending on availability of data
  if (state.userData.hasOwnProperty("server")) {
    return (
      <div>
        <h2>Profile</h2>
        <p>Email: {state.userData.server.user.email} </p>
        <p>Name: {state.userData.server.user.name} </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
