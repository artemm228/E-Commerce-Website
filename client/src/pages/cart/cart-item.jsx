import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

export const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity, removeItemFromCart } = useContext(ShopContext);

  const [newQuantity, setNewQuantity] = useState(item.quantity);

  const handleRemove = () => {
    let updatedQuantity = newQuantity;
    if (newQuantity > 1) {
      removeFromCart(item.itemId, item.color, 1);
      updatedQuantity = newQuantity - 1;
    } else {
      removeItemFromCart(item.itemId, item.color);
    }
    updateQuantity(item.itemId, item.color, updatedQuantity);
    setNewQuantity(prevQuantity => prevQuantity - 1);
  };

  const handleUpdate = () => {
    const updatedQuantity = newQuantity + 1;
    updateQuantity(item.itemId, item.color, updatedQuantity);
    setNewQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    setNewQuantity(parseInt(value));
    if (value > 0) {
      updateQuantity(item.itemId, item.color, parseInt(value));
    }
  };

  return (
    <div className='cartItem'>
      <img className='cart-img' src={item.imageUrl} alt={item.productName} />
      <div className='products-description'>
        <div className='product-name-cart'>{item.productName}</div>
        <div className='product-price-cart'>${item.price}</div>

        {item.color !== "" && (
          <div className='product-color-options'>
            <span className='color-label'>color</span>
            <div className='product-color' style={{ backgroundColor: item.color }}></div>
          </div>
        )}

        <div className='countHandler'>
          <button onClick={handleRemove}>-</button>
          <input value={newQuantity} onChange={handleQuantityChange} />
          <button onClick={handleUpdate}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
