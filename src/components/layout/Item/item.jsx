import "../../../styles/App.scss";
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';
import { Counter } from "../../common/Counter";
import { useState } from "react";
import React from "react";

export const Item = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    const itemToCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };

    console.log(itemToCart);
  };

  return (
    
    <Zoom>
      <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12">
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
            counter={quantity}
            setCounter={setQuantity}
            handleAddToCart={handleAddToCart}
          />
          </div>
        </div>
      </div>
    </Zoom>
  );
};
