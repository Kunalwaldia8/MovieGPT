import React from "react";
import MovieCards from "./MovieCards";

export const MovieList = ({ title, movieData }) => {
  return (
    <div className="mb-8 px-2">
      <h1 className="text-white text-2xl font-bold mb-3">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-none">
        <div className="flex  ">
          {movieData?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
