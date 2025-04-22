import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import { showSearchReducer } from "./showSearchSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
    showSearch: showSearchReducer,
  },
});

export default store;
