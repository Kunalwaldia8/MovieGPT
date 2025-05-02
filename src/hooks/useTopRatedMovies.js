import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getmovies();
  }, []);
};

export default useTopRatedMovies;
