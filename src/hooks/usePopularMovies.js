import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getmovies();
  }, []);
};

export default usePopularMovies;
