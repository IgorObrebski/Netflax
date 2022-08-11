import React from "react";
import { hideModal } from "../features/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { favHideModal } from "../features/favModalSlice";

const ModalShade = () => {
  const dispatch = useDispatch();
  const show = useSelector((store) => store.modal.showModal);
  const favShow = useSelector((store) => store.favModal.showModal);

  if (show || favShow) {
    return (
      <div
        className='modalBackground'
        onClick={() => [dispatch(hideModal()), dispatch(favHideModal())]}
      ></div>
    );
  }
};

export default ModalShade;
