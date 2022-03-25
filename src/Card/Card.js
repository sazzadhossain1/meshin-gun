import React from "react";
import "./Card.css";
import {BsFillCartFill} from "react-icons/bs"

const Card = ({gunData, handleAddToCart}) => {
  // console.log(props.gunData);
const {name, img, bullet, capacity, action, price,} = gunData;


  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>

      <div className="gun-info">
      <h1>Name:{name}</h1>
      <p>Bullet Type:{bullet}</p>
      <p>Capacity:{capacity}</p>
      <p>Action:{action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(gunData)}> <BsFillCartFill className="icon" /> </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
