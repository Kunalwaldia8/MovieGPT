import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
const GptSuggestions = () => {
  const { MovieNames, MovieResults } = useSelector((store) => store.showSearch);
  console.log(MovieNames, MovieResults);
  if (MovieNames === null || MovieResults === null) {
    return (
      <div className="text-white">
        <h1 className="text-2xl font-bold">No Suggestions Available</h1>
      </div>
    );
  }
  return (
    <div className="relative z-40 w-full mx-20 -mt-20 scrollbar-none ">
      {MovieNames.map((movie, index) => {
        return (
          <div className="bg-transparent">
            <MovieList
              key={index}
              title={movie}
              movieData={MovieResults[index]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GptSuggestions;
