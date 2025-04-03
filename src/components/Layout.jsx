import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="min-h-[calc(100vh-7rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
