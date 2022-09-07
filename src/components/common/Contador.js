import { useState } from "react";
import swal from "sweetalert";

export const Contador = ({ item }) => {
  let [counter, setCounter] = useState(1);

  const handleAdd = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
      return counter;
    }
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      return counter;
    }
  };

  const handleAddToCart = () => {
    swal({
      title: "Nice!",
      text: `
                The wine ${item.buttonname} has been added successfully! 
                Cuantity: ${counter}
                Total price: ${item.price * counter}
            `,
      icon: "success",
      buttons: true,
    //   button: "Continue with Chckout",
    })
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
        <button
          className="anchor-item btn btn-outline-danger edit"
          onClick={handleAddToCart}
        >
          Add to Cart!
        </button>
      </div>
    </div>
  );
};
