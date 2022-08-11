import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  movie: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.showModal = true;
      state.movie = action.payload;
      console.log(state.movie);
    },
    hideModal(state) {
      state.showModal = false;
      state.object = {};
      console.log(state.movie);
    },
    
  },
});

export const { showModal, hideModal, } = modalSlice.actions;
export default modalSlice.reducer;
