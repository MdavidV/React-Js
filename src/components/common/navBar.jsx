import logo from "../../assets/Logo.png";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import twt from "../../assets/twt.svg";
import cart from "../../assets/In.svg";
import "../../styles/App.scss";
import { Link } from 'react-router-dom';

export const MenuNav = () => {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="socialMedia-container">
          <a href="index.html">
            <img src={fb} alt="" />
          </a>
          <a href="index.html">
            <img src={ig} alt="" />
          </a>
          <a href="index.html">
            <img src={twt} alt="" />
          </a>
        </div>
        <nav className="Menu-nav">
          <div className="Anchors-nav">
            <Link to='/' className="item-menu-Nav">
              Check Out
            </Link>
            <a href="#" className="item-menu-Nav">
              T & C
            </a>
            <a href="#" className="item-menu-Nav">
              Shop
            </a>
            <Link className="item-menu-Nav" to="/products">Buy Now!</Link>
          </div>
          <div className="logo-header">
            <img src={logo} alt="" className="logo" />
          </div>
        </nav>
        <div className="cart-container">
          <Link to='/cart'>
            <img className="cart-icon" src={cart} />
          </Link>
        </div>
      </div>
    </header>
  );
};
