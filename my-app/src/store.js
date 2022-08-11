import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./features/movieList/movieListSlice";
import movieFavListReducer from "./features/movieList/movieFavListSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import modalReducer from "./features/modalSlice";
import favModalReducer from "./features/favModalSlice";

const reducers = combineReducers({
  list: movieListReducer,
  favList: movieFavListReducer,
  modal: modalReducer,
  favModal: favModalReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favList"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
