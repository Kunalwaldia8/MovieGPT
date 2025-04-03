import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const Body = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="bg-img"
          className="w-full h-full object-cover"
        /> */}
        <button className="absolute top-50 right-0 text-xl font-bold pointer-cursor text-black" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};
