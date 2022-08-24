import React from "react";
import Mol from "../mol.jpg";
import "./Header.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='image'>
        <img src={Mol} alt='mol' className='mol'></img>
        <p>The silence of the lamb</p>
      </div>
    </div>
  );
};
