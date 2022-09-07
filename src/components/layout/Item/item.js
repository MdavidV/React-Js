import "../../../styles/App.scss";
import { Contador } from "../../common/Contador";
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {

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
            <Contador initial='1' item= {product} />

          </div>
        </div>
      </div>
    </Zoom>
  );
};
