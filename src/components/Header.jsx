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
    dispatch(setLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="absolute overflow-x-auto w-full max-w-screen bg-gradient-to-b from-black z-50">
      <div className="px-4 py-4 md:px-8 md:py-4 flex flex-col md:flex-row md:justify-between">
        {/* Top row: Logo and Username+SignOut (Stacked in mobile, horizontal in md+) */}
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-lg font-bold text-white">MovieGPT</h1>

          {user && (
            <div className="md:hidden flex items-center gap-4">
              <span className="text-white font-medium">{user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:from-purple-900 hover:to-red-900 text-white rounded-xl font-semibold px-4 py-2 transition-colors"
              >
                {langConstants[lang].SignOut}
              </button>
            </div>
          )}
        </div>

        {user && (
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-4 md:mt-0">
            {/* Username + SignOut for md+ */}

            {/* Language Select + GPT Button */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <select
                className="text-white  border-gray-400 px-2 py-1 rounded"
                name="Language"
                id="lang"
                onChange={handleSelect}
              >
                <option className="text-white" value="en">
                  English
                </option>
                <option className="text-white" value="hindi">
                  Hindi
                </option>
                <option className="text-white" value="marathi">
                  Marathi
                </option>
                <option className="text-white" value="gujarati">
                  Gujarati
                </option>
                <option className="text-white" value="tamil">
                  Tamil
                </option>
              </select>
              <button
                className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:from-purple-900 hover:to-red-900 text-white rounded-xl font-semibold px-4 py-2 transition-colors"
                onClick={ToggleGPTSearch}
              >
                {searchPage
                  ? langConstants[lang].HomePage
                  : langConstants[lang].GptSearch}
              </button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-white font-medium">{user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="bg-gradient-to-r from-purple-700 to bg-red-700 hover:from-purple-900 hover:to-red-900 text-white rounded-xl font-semibold px-4 py-2 transition-colors"
              >
                {langConstants[lang].SignOut}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
