import React, { useEffect } from "react";
import { MovieList } from "./components/MovieList";
import { Header } from "./components/Header";
import { getMovies } from "./features/movieList/movieListSlice";
import { useDispatch } from "react-redux";
import { FavMovieList } from "./components/FavMovieList";
import FavHeader from "./components/FavHeader";
import Modal from "./components/Modal";
import ModalShade from "./components/ModalShade";
import FavModal from "./components/FavModal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  });

  return (
    <div>
      <Header />
      <MovieList />
      <FavHeader />
      <FavMovieList />
      <Modal />
      <FavModal />
      <ModalShade />
    </div>
  );
}

export default App;
