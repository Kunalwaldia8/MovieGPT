import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="md:w-48 w-24 md:pr-4 mx-1 -my-2 md:my-0 flex justify-center ">
      <img
        className="rounded-2xl  mx-auto"
        src={IMG_URL + posterPath}
        alt="nowplayingMovies"
      />
    </div>
  );
};

export default MovieCards;
