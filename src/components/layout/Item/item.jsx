import "../../../styles/App.scss";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { Counter } from "../../common/Counter";
import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

export const Item = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useContext(CartContext);

  console.log(cart);

  const handleAddToCart = () => {
    const itemToCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };

    addToCart(itemToCart);
  };

  return (
    <Zoom>
      {/* <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12">
        <div className="product-container ">
          <div className="img-product">
            <img src={product.img} />
          </div>
          <div className="details-product">
            <p>
              {product.name}
              <br />
              <span>{product.price} $</span>
            </p>
            <Link to={`/item/${product.id}`} className="anchor-item btn btn-dark">View Details!</Link> 

            <Counter
            max={product.stock}
            id={product.id}
            counter={quantity}
            setCounter={setQuantity}
            handleAddToCart={handleAddToCart}
          />
          </div>
        </div>
      </div> */}

      <div className="col-3 my-5">
        <div className="product-container">
          <div className="img-product d-flex justify-content-center">
            <img src={product.img} />
          </div>
          <div className="details mt-5">
            <div className="product-tittle">
              <h4>{product.name}</h4>
            </div>
            <div className="product-details">
              <p>{product.dsc}</p>
              <p className="product-details-price">{product.price}$</p>
            </div>
          </div>
          <div className="product-buttons">
            <Link to={`/item/${product.id}`} className="more-btn">
              More
            </Link>
            <Counter
              max={product.stock}
              id={product.id}
              counter={quantity}
              setCounter={setQuantity}
              handleAddToCart={handleAddToCart}/>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
