import React, { useRef } from "react";
import { langConstants } from "../utils/LanguageConstants";
import { useSelector } from "react-redux";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGptMovies } from "../utils/showSearchSlice";

const GptSearch = () => {
  const lang = useSelector((store) => store.language.lang);
  const query = useRef(null);
  const dispatch = useDispatch();

  const fetchMovies = async (queryValue) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        queryValue +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleSubmit = async () => {
    const queryValue = query.current.value;
    if (queryValue) {
      if (typeof window !== "undefined" && window.puter) {
        const result = await window.puter.ai.chat(
          "dont write any thing extra other than name of  5 Movies which is related to " +
            queryValue +
            "result should be comman seperated for example (movie1,movie2,movie3,..)"
        );
        const gptMovies = await result?.message?.content;
        const movies = gptMovies.split(",");
        const movieResults = movies.map((movie) => fetchMovies(movie));
        const resolvedResult = await Promise.all(movieResults);

        dispatch(
          setGptMovies({ MovieNames: movies, MovieResults: resolvedResult })
        );
      }
    }
  };
  return (
    <div className="px-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl w-1/2 h-1/2">
      <form
        className="flex justify-center items-center gap-4 m-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="bg-white px-4 py-2 rounded-lg w-full"
          placeholder={langConstants[lang].GptPlaceHolder}
          ref={query}
        />
        <button
          className="bg-black text-white  rounded-lg px-4 py-2"
          onClick={handleSubmit}
        >
          {langConstants[lang].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
