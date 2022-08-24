import cart from "../../assets/In.svg";
import wine from "../../assets/1.png"
import "../../styles/App.scss";

export const ItemListContainer = ({ name, price }) => {
  return (
    <div className="product-container">
      <div className="img-product">
        <img src={ wine }/>
      </div>
      <div className="details-product">
        <p>
          {name}
          <br />
          <span>{price} $</span>
        </p>
        <button>
          <img className="cart-icon" src={cart} />
        </button>
      </div>
    </div>
  );
};
