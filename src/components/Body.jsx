import React from "react";
import NowPlayingMovies from "../hooks/useNowPlayingMovies";
import PopularMovies from "../hooks/usePopularMovies";
import UpcomingMovies from "../hooks/useUpcomingMovies";
import TopRatedMovies from "../hooks/useTopRatedMovies";
import { Maincontainer } from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import GptSuggestions from "./GptSuggestions";
export const Body = () => {
  NowPlayingMovies();
  PopularMovies();
  UpcomingMovies();
  TopRatedMovies();
  const showSearch = useSelector((store) => store.showSearch.GptSearch);
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4 md:pt-0 pt-36">
      {showSearch ? (
        <div className="w-full flex flex-col items-center gap-6">
          <GptSearch />
          <GptSuggestions />
        </div>
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
