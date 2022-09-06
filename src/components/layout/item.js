import cart from "../../assets/In.svg";
import "../../styles/App.scss";
import { Contador } from "../common/Contador";

export const Item = ({ name, price, stock, img }) => {
  return (
    <div className="product-container">
      <div className="img-product">
        <img src={img} />
      </div>
      <div className="details-product">
        <p>
          {name}
          <br />
          <span>{price} $</span>
        </p>
        <a href="#">
          <img className="cart-icon" src={cart} />
        </a>
        <Contador stock={stock} initial="1"/>
        <p className="my-3">Aviable stock: {stock}</p>
      </div>
    </div>
  );
};
