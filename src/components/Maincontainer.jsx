import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || !movies.length) return null;

  const topmovie = movies[0];
  const { original_title = "", overview = "", id } = topmovie || {};

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <VideoBackground movieid={id} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/20 to-black/30"></div>

      {/* Video Title - Positioned in front */}
      <div className="relative  mt-20 ml-20 z-20 h-full flex items-center">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};
