import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getmovies();
  }, []);
};

export default usePopularMovies;
