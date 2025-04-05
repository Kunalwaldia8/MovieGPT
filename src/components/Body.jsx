import React from "react";
import NowPlayingMovies from "../hooks/useNowPlayingMovies";
import { Maincontainer } from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
export const Body = () => {
  NowPlayingMovies();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4">
      <Maincontainer />
      <SecondaryContainer />
    </div>
  );
};
