import cart from "../../assets/In.svg";
import wine from "../../assets/1.png"
import "../../styles/App.scss";
import { Contador } from "../common/Contador";


export const Item = ({ name, price }) => {


    return(
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
          <a href="#">
            <img className="cart-icon" src={cart} />
          </a>

          <Contador stock= '4' initial='1'/>
        </div>
      </div>
    );
}