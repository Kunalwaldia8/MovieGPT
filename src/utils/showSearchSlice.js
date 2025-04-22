import { createSlice } from "@reduxjs/toolkit";
const showSearchSlice = createSlice({
  name: "showSearch",
  initialState: {
    showSearch: false,
  },
  reducers: {
    setshowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { setshowSearch } = showSearchSlice.actions;
export const showSearchReducer = showSearchSlice.reducer;
