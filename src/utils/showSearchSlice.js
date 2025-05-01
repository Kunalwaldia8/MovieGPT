import { createSlice } from "@reduxjs/toolkit";
const showSearchSlice = createSlice({
  name: "Gpt",
  initialState: {
    GptSearch: false,
    MovieResults: null,
    MovieNames: null,
  },
  reducers: {
    setshowSearch: (state) => {
      state.GptSearch = !state.GptSearch;
    },
    setGptMovies: (state, action) => {
      const { MovieNames, MovieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.MovieResults = MovieResults;
    },
  },
});

export const { setshowSearch, setGptMovies } = showSearchSlice.actions;
export const showSearchReducer = showSearchSlice.reducer;
