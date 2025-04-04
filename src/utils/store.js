import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";

/**
 * Redux store configuration
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});

export default store;
