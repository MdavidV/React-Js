import { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export const Counter = ({ max, counter, setCounter, handleAddToCart }) => {
  const handleAdd = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container my-4 d-flex justify-content-center flex-column">
      <div className="counter-cont">
        <button className="btn btn-outline-dark" onClick={handleMinus}>
          -
        </button>
        <span className="mx-3">{counter}</span>
        <button className="btn btn-outline-dark" onClick={handleAdd}>
          +
        </button>
      </div>

      <div className="add-cont my-2">
        <Link
        to='/Cart'
          className="anchor-item btn btn-outline-danger edit"
          onClick={handleAddToCart}
        >
          Add to Cart!
        </Link>
      </div>
    </div>
  );
};
