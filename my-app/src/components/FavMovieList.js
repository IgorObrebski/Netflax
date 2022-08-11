import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavMovies from "./FavMovies";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { changePages, prevPage } from "../features/movieList/movieFavListSlice";
import "./FavMovie.css";

export const FavMovieList = () => {
  const favMovieList = useSelector((store) => store.favList.movieFavList);
  const currentPage = useSelector((store) => store.favList.currentPage);
  const dispatch = useDispatch();

  const [moviesPerPage] = useState(7);

  const lastPage = favMovieList.length / moviesPerPage - 1;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = favMovieList.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className='favMovies'>
      {currentPage >= 2 ? (
        <button onClick={() => dispatch(prevPage())} className='left'>
          <ArrowBackIosIcon />
        </button>
      ) : null}
      <div className="list">
        {currentMovie.map((movie) => (
          <FavMovies
            movie={movie}
            image={movie["im:image"]}
            key={movie.id.attributes["im:id"]}
            id={movie.id.attributes["im:id"]}
          />
        ))}
      </div>
      {currentMovie.length >= 7 ? (
        <button onClick={() => dispatch(changePages())} className='right'>
          <ArrowForwardIosIcon />
        </button>
      ) : null}
    </div>
  );
};
