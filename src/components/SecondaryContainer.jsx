import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);
  return (
    <div className="relative z-40 w-full mx-20 -mt-20 scrollbar-none">
      {movieData.nowPlayingMovies && (
        <div>
          <MovieList
            title={"Now playing"}
            movieData={movieData.nowPlayingMovies}
          />
        </div>
      )}
      {movieData.popularMovies && (
        <div>
          <MovieList title={"Popular"} movieData={movieData.popularMovies} />
        </div>
      )}
      {movieData.upcomingMovies && (
        <div>
          <MovieList title={"Upcoming"} movieData={movieData.upcomingMovies} />
        </div>
      )}
      {movieData.topRatedMovies && (
        <div>
          <MovieList title={"Top Rated"} movieData={movieData.topRatedMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
