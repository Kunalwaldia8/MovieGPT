import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  const videoClip = async () => {
    const video = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      options
    );
    const data = await video.json();
    const filterData = data.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    const Key = filterData.length ? filterData[0].key : data.results[0].key;
    dispatch(addTrailer(filterData[0]));
  };
  useEffect(() => {
    videoClip();
  }, []);
};

export default useMovieTrailer;
