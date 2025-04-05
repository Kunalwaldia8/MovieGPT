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
    <div className="text-white">
      <VideoTitle title={original_title} overview={overview} />
      <div className="absolute inset-0 z-0">
        <VideoBackground movieid={id} />
      </div>
    </div>
  );
};
