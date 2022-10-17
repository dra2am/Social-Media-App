// import { useStore } from "react-redux";
// import { authUser } from "../../redux-files/actions";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// import Profile from "../../components/profile";

// export default function UserProfile() {
//   //get state from store, set up router
//   const store = useStore();
//   const state = store.getState();
//   const router = useRouter();

//   //check for token, if there, auth user:
//   useEffect(() => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       store.dispatch(authUser());
//       console.log("token is valid", state.isAuth);
//     } else {
//       router.push("/");
//       console.log("token is invalid", state.isAuth);
//       return;
//     }
//   }, []);

//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// }
