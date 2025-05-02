import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Layout = () => {
  if (navigator.online) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-black">
      {/* Background with overlay */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-red-900/40" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div>
          <Header />
        </div>
        <main className="min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
