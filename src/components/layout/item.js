import cart from "../../assets/In.svg";
import "../../styles/App.scss";
import { Contador } from "../common/Contador";
import { AlertSuccessInCart } from "./alertSuccessInCart";
import Zoom from 'react-reveal/Zoom'

export const Item = ({ name, price, stock, img }) => {
  return (
    <Zoom >
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
          <button className="anchor-item btn btn-dark">View Details!</button>
          <Contador stock={stock} initial="1" />
          <button
            className="anchor-item btn btn-purple edit"
            onClick={AlertSuccessInCart}
          >
            Add to Cart!
          </button>

          {/* <p className="my-3">Aviable stock: {stock}</p> */}
        </div>
      </div>
    </Zoom>
  );
};
