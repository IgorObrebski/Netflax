import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../features/movieList/movieFavListSlice";

const FavModal = () => {
  const movie = useSelector((store) => store.favModal.movie);
  const show = useSelector((store) => store.favModal.showModal);

  const dispatch = useDispatch();

  const image = movie["im:image"];

  if (show) {
    return (
      // <div className='modalBackground' onClick={() => dispatch(hideModal())}>
      <div className='modal'>
        <div className='name'>{movie["im:name"].label}</div>
        <img src={image[2].label} alt='movie screen'></img>
        <div className='description'>{movie.summary.label}</div>
        <button
          onClick={() => dispatch(removeFav(movie.id.attributes["im:id"]))}
        >
          -
        </button>
      </div>
      // </div>
    );
  }
};

export default FavModal;
