import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
//there will be a method of uploading images here

export default function Profile() {
  //get state from store, set up router
  const store = useStore();
  const state = store.getState();
  const router = useRouter();

  //contains user data
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3001/users/profile", {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        })
        .then((res) => {
          // store.dispatch(userDataServer(res.data));
          setEmail(res.data.email);
          setName(res.data.name);
          console.log(state);
        })
        .catch((err) => {
          //if req fails, homepage, remove token
          router.push("/");
          console.log("fail request", err);
          window.localStorage.removeItem("token");
          return;
        });
    }
    fetchData();
  }, []);

  //displays loading or profile depending on availability of data
  if (state.isAuth === true && name && email) {
    return (
      <div>
        <h2>Profile</h2>
        <p>Email: {email} </p>
        <p>Name: {name} </p>
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
