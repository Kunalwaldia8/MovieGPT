import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getmovies();
  }, []);
};

export default useNowPlayingMovies;
