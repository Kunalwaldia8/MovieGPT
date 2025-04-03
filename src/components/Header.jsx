import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.userReducer);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <img className="h-12" src={NETFLIX_LOGO} alt="netflix logo" />
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              className=" bg-red-700 hover:bg-red-800 text-white rounded-xl font-semibold  px-4 py-2  transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
