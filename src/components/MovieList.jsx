import React from "react";
import MovieCards from "./MovieCards";

export const MovieList = ({ title, movieData }) => {
  return (
    <div className="mb-8 px-2">
      <h1 className="text-white text-2xl font-bold mb-3">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-none">
        <div className="flex my-4 ">
          {movieData?.map(
            (movie) =>
              movie.poster_path && (
                <div className="bg-black mx-2 p-2 rounded-xl ">
                  (
                  <MovieCards key={movie.id} posterPath={movie.poster_path} />)
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
