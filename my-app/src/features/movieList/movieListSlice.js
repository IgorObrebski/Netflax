import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://itunes.apple.com/us/rss/topmovies/limit=35/json";

const initialState = {
  movieList: [],
  isLoading: true,
  currentPage: 1,
};

export const getMovies = createAsyncThunk("list/getMovies", () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.feed.entry);
});

const movieListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changePages(state) {
      state.currentPage += 1;
    },
    prevPage(state) {
      state.currentPage -= 1;
    },
  },

  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movieList = action.payload;
    },
    [getMovies.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { changePages, prevPage } = movieListSlice.actions;
export default movieListSlice.reducer;
