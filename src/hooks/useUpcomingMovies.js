import { useDispatch } from "react-redux";
import { addupcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();

    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getmovies();
  }, []);
};

export default useUpcomingMovies;
