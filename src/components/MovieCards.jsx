import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 flex justify-center ">
      <img
        className="rounded-2xl  mx-auto"
        src={IMG_URL + posterPath}
        alt="nowplayingMovies"
      />
    </div>
  );
};

export default MovieCards;
