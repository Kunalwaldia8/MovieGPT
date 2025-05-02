import React, { useRef } from "react";
import { langConstants } from "../utils/LanguageConstants";
import { useSelector, useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { setGptMovies } from "../utils/showSearchSlice";

const GptSearch = () => {
  const lang = useSelector((store) => store.language.lang);
  const query = useRef(null);
  const dispatch = useDispatch();

  const fetchMovies = async (queryValue) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1`,
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
          `dont write any thing extra other than name of 5 Movies which is related to ${queryValue} result should be comman seperated for example (movie1,movie2,movie3,..)`
        );
        const gptMovies = result?.message?.content;
        const movies = gptMovies?.split(",") || [];
        const movieResults = await Promise.all(
          movies.map((movie) => fetchMovies(movie))
        );
        dispatch(
          setGptMovies({ MovieNames: movies, MovieResults: movieResults })
        );
      }
    }
  };

  return (
    <>
      <div className="rounded-xl w-full md:w-fit flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-purple-700 px-4 md:px-6 py-10 md:py-10 md:mt-32  ">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-6 md:p-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row gap-4 md:gap-6"
          >
            <input
              type="text"
              ref={query}
              placeholder={langConstants[lang].GptPlaceHolder}
              className="bg-gray-100 w-full md:w-3/4 px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-base md:text-lg px-4 md:px-5 py-3 md:py-4 rounded-xl transition duration-300 shadow-md w-full md:w-auto"
            >
              {langConstants[lang].Search}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSearch;
