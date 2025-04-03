import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const Body = () => {
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
    <div>
      <div className="absolute inset-0 z-0">
        <img
          src={import.meta.env.VITE_IMG_CDN_URL}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-50 right-0 text-xl font-bold pointer-cursor text-black"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
