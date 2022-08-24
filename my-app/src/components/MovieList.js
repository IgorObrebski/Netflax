import React from "react";
import Movies from "./Movies";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changePages, prevPage } from "../features/movieList/movieListSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Movie.css";

export const MovieList = () => {
  const movieList = useSelector((store) => store.list.movieList);
  const currentPage = useSelector((store) => store.list.currentPage);
  const dispatch = useDispatch();

  const [moviesPerPage] = useState(7);

  const lastPage = movieList.length / moviesPerPage - 1;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = movieList.slice(indexOfFirstMovie, indexOfLastMovie);

  if (movieList.length > 0) {
    return (
      <>
        <div className='movies'>
          {currentPage >= 2 ? (
            <button onClick={() => dispatch(prevPage())} className='leftBtn'>
              <ArrowBackIosIcon />
            </button>
          ) : null}
          <div className='list'>
            {currentMovie.map((movie) => (
              <Movies
                movie={movie}
                image={movie["im:image"]}
                key={movie.id.attributes["im:id"]}
                id={movie.id.attributes["im:id"]}
              />
            ))}
          </div>
          {currentPage <= lastPage ? (
            <button onClick={() => dispatch(changePages())} className='rightBtn'>
              <ArrowForwardIosIcon />
            </button>
          ) : null}
        </div>
      </>
    );
  } else {
    return null;
  }
};
