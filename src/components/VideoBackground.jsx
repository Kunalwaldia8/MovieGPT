import React, { useState, useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailer);
  const videoKey = trailer?.key;
  useMovieTrailer(movieid);
  return (
    <div className="w-full">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
