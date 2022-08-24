import React from "react";
import { useDispatch } from "react-redux";
import { addToFav } from "../features/movieList/movieFavListSlice";
import "./Movie.css";

import { showModal } from "../features/modalSlice";

const Movies = ({ image, movie, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='movie' onClick={() => dispatch(showModal(movie))}>
        <img src={image[2].label} alt='movies Screen' />
      </div>
    </>
  );
};

export default Movies;
