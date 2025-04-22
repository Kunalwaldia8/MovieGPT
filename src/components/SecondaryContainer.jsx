import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);
  return (
    <div className="relative z-40 w-full mx-20 -mt-20 scrollbar-none">
      {movieData.nowPlayingMovies.length != undefined && (
        <div>
          <MovieList
            title={"Now playing"}
            movieData={movieData.nowPlayingMovies}
          />
        </div>
      )}
      {movieData.popularMovies.length != undefined && (
        <div>
          <MovieList title={"Popular"} movieData={movieData.popularMovies} />
        </div>
      )}
      {movieData.upcomingMovies.length != undefined && (
        <div>
          <MovieList title={"Upcoming"} movieData={movieData.upcomingMovies} />
        </div>
      )}
      {movieData.topRatedMovies.length != undefined && (
        <div>
          <MovieList title={"Top Rated"} movieData={movieData.topRatedMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
