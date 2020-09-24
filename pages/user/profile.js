import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "react-redux";
import Profile from "../../components/profile";

export default function UserProfile() {
  //set up router
  const router = useRouter();
  //fetch the user from store
  const store = useStore();
  const state = store.getState();

  //upon loading page, check for user
  //no user = back to login
  useEffect(() => {
    if (!state.userData.hasOwnProperty("server")) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <Profile />
    </div>
  );
}
