import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../features/favModalSlice";
import "./FavMovie.css";

const FavMovies = ({ image, movie, id }) => {
  const dispatch = useDispatch();

  return (
    <div className='favMovie' onClick={() => dispatch(showModal(movie))}>
      <img src={image[2].label} alt='movies Screen' />
    </div>
  );
};

export default FavMovies;
