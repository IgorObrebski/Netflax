import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFav } from "../features/movieList/movieFavListSlice";
import "./Modal.css";

const Modal = () => {
  const movie = useSelector((store) => store.modal.movie);
  const show = useSelector((store) => store.modal.showModal);

  const dispatch = useDispatch();

  const image = movie["im:image"];

  if (show) {
    return (
      // <div className='modalBackground' onClick={() => dispatch(hideModal())}>
      <div className='modal'>
        <div className='name'>{movie["im:name"].label}</div>
        <img src={image[2].label} alt='movie screen'></img>
        <div className='description'>{movie.summary.label}</div>
        <button onClick={() => dispatch(addToFav(movie))}>+</button>
      </div>
      // </div>
    );
  }
};

export default Modal;
