import React from "react";
import { useState } from "react";
import { Counter } from "../../common/Counter";


export const ItemDetails = ({ item }) => {

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemToCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
    };

    console.log(itemToCart);
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-4 my-5">
          <img src={item.img} style={{ width: "100%" }} />
        </div>

        <div className="col-8 ">
          <h2 className="text-center mb-5"> {item.name} </h2>
          <p className="mt-5 text-justify">{item.descr}</p>
          <h2>
            {" "}
            {item.year} vintage, {item.country} .{" "}
          </h2>

          <Counter
            max={item.stock}
            counter={quantity}
            setCounter={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};
