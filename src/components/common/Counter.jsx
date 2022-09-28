import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../layout/Cart/CartContext";

export const Counter = ({ max, counter, setCounter, handleAddToCart, id }) => {

  const {isInCart} = useContext(CartContext);

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAdd = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="container my-4 d-flex justify-content-center flex-column">



{
  isInCart(id)
  ?<Link to='/cart' className="btn btn-outline-success my-2 col-6 mx-5">Go to Checkout</Link>
  : <div className="counter-cont">
        <button className="btn btn-outline-dark" onClick={handleMinus}>
            -
        </button>
        <span className="mx-3">{counter}</span>
        <button className="btn btn-outline-dark" onClick={handleAdd}>
            +
        </button>
        <div className="add-cont my-2">
            <Link to="/products"className="anchor-item btn btn-outline-danger edit" onClick={handleAddToCart}>Add to Cart!</Link>
        </div>
</div>
}
    </div>
  );
};
