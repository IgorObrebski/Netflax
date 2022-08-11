import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieFavList: [],
  currentPage: 1,
};

const movieFavListSlice = createSlice({
  name: "favList",
  initialState,
  reducers: {
    changePages(state) {
      state.currentPage += 1;
    },
    prevPage(state) {
      state.currentPage -= 1;
    },

    addToFav(state, action) {
      const movie = action.payload;
      const id = action.payload.id.attributes["im:id"];

      if (
        !state.movieFavList
          .map((item) => item.id.attributes["im:id"])
          .includes(id)
      ) {
        state.movieFavList.push(movie);
      }
    },
    removeFav(state, action) {
      const movieId = action.payload;

      state.movieFavList = state.movieFavList.filter(
        (movie) => movie.id.attributes["im:id"] !== movieId
      );
    },
  },
});

export const { addToFav, removeFav, prevPage, changePages } =
  movieFavListSlice.actions;
export default movieFavListSlice.reducer;
