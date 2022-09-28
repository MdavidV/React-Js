import React from 'react'
import { useContext } from 'react'
import { MenuNav } from '../../common/navBar'
import { Footer } from '../Footer/Footer'
import { CartContext } from './CartContext'


export const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext);

  

  return (
    <div>
      <MenuNav/>
      <div className="container my-5">
        <h2>Your Cart!</h2>
        <hr/>
        
        {cart.map( (item) => (
          <div className={item.id}>
            <div className="row my-3 d-flex justify-content-center">
              <div className="col-6 d-flex justify-content-between p-4">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className='fs-4'>Price: {item.price}$</p>
                  <small>Quantity: {item.quantity}</small>
                </div>
                <div className="item-delete">
                  <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Remove Item</button>
                </div>
              </div>
              <hr/>
            </div>

            </div>
        ) )}


        <h4>Total: {cartTotal()}$</h4>
        <button className='btn btn-danger' onClick={emptyCart} >Empty Cart!</button>
      </div>



      <Footer />
    </div>
  )
}
