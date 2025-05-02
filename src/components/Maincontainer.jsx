import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

export const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || !movies.length) return null;

  const topmovie = movies[0];
  const { original_title = "", overview = "", id } = topmovie || {};

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative  md:h-[100vh] h-full w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 h-1/2 md:h-full w-full">
          <VideoBackground movieid={id} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-full overflow-hidden inset-0 z-10 bg-gradient-to-r Sfrom-black via-black/20 to-black/30" />

        {/* Video Title */}
        <div className="relative  mt-25 md:mt-20 ml-5 md:ml-20 z-20 md:h-[80%] flex items-center ">
          <VideoTitle title={original_title} overview={overview} />
        </div>
      </div>
    </div>
  );
};
