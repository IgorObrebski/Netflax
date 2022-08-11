import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  movie: {},
};

const favModalSlice = createSlice({
  name: "favModal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.showModal = true;
      state.movie = action.payload;
      console.log(state.movie);
    },
    favHideModal(state) {
      state.showModal = false;
      state.object = {};
      console.log(state.movie);
    },
  },
});

export const { showModal, favHideModal } = favModalSlice.actions;
export default favModalSlice.reducer;
