import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./cart.css";

export const Cart = () => {
  const { cartItems, setCartItems, totalCartPrice } = useContext(ShopContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart/view');
        const fetchedCartItems = response.data;

        setCartItems(fetchedCartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>

      <div className='cartItems'>
        {cartItems.map(item => (
          <CartItem key={item.itemId} item={item} />
        ))}
      </div>

      {cartItems.length > 0 ? (
        <div className='checkout'>
          <p className='total'>Subtotal: ${totalCartPrice()}</p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h1> Your shopping cart is empty </h1>
      )}
    </div>
  );
};

export default Cart;

