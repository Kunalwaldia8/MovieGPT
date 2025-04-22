import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setshowSearch } from "../utils/showSearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const ToggleGPTSearch = () => {
    dispatch(setshowSearch());
  };

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
        <h1 className="text-2xl font-bold text-white">MovieGPT</h1>
        {user && (
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:bg-gradient-to-r hover:from-purple-900  hover:to-red-900 text-white rounded-xl font-semibold px-4 py-2 transition-colors"
              onClick={ToggleGPTSearch}
            >
              GPT Search
            </button>
            <span className="text-white font-medium">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              className="bg-red-700 hover:bg-red-800 text-white rounded-xl font-semibold px-4 py-2 transition-colors"
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
