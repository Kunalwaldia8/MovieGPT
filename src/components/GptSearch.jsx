import React from "react";
import { langConstants } from "../utils/LanguageConstants";
import { useSelector } from "react-redux";
const GptSearch = () => {
  const lang = useSelector((store) => store.language.lang);
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
        />
        <button className="bg-black text-white  rounded-lg px-4 py-2">
          {langConstants[lang].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
