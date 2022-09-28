import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();




const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(init);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  }

  const emptyCart = () => {
    setCart([]);
  }

  const removeItem = (id) => {
    setCart( cart.filter((item) => item.id !== id) );
  }

  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartTotal,
        emptyCart,
        removeItem
      }}
    >
        {children}
    </CartContext.Provider>
  );
};
