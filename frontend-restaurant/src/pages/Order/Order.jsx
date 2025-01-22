/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='order'>
      <div className="order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <div className="multi-fields">
          <input type="text" placeholder='House number'/>
          <input type="text" placeholder='Street'/>
        </div>
        <input type="text" placeholder='Zip code'/>
        <div>
        <input type="text" placeholder='Phone'/>
        </div>
      </div>
      <div className='order-right'>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Order
