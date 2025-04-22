import { useDispatch } from "react-redux";
import { addupcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();

    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    getmovies();
  }, []);
};

export default useUpcomingMovies;
