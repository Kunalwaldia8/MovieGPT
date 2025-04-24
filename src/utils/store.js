import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import { showSearchReducer } from "./showSearchSlice";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
    showSearch: showSearchReducer,
    language: languageReducer,
  },
});

export default store;
