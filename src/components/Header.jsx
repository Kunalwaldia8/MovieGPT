import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setshowSearch } from "../utils/showSearchSlice";
import { setLanguage } from "../utils/languageSlice";
import { langConstants } from "../utils/LanguageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const lang = useSelector((store) => store.language.lang);
  const searchPage = useSelector((store) => store.showSearch.GptSearch);
  const ToggleGPTSearch = () => {
    dispatch(setshowSearch());
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-white">MovieGPT</h1>
        {user && (
          <div className="flex items-center gap-4">
            <select
              className="text-white"
              name="Language"
              id="lang"
              onChange={(e) => handleSelect(e)}
            >
              <option className="text-black" value="en">
                English
              </option>
              <option className="text-black" value="hindi">
                Hindi
              </option>
              <option className="text-black" value="marathi">
                Marathi
              </option>
              <option className="text-black" value="gujarati">
                Gujarati
              </option>
              <option className="text-black" value="tamil">
                Tamil
              </option>
            </select>
            <button
              className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:bg-gradient-to-r hover:from-purple-900  hover:to-red-900 text-white rounded-xl font-semibold  px-4 py-2 transition-colors"
              onClick={ToggleGPTSearch}
            >
              {searchPage
                ? langConstants[lang].HomePage
                : langConstants[lang].GptSearch}
            </button>
            <span className="text-white font-medium">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:bg-gradient-to-r hover:from-purple-900  hover:to-red-900 text-white rounded-xl font-semibold px-4 py-2 transition-colors "
            >
              {langConstants[lang].SignOut}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
