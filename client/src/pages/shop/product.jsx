import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './shop.css'

export const Product = (props) => {
  const { _id, productName, price, colors } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[_id];
  const selectedColor = colors[0].colorName.length > 0 ? colors[0].colorName : '';
  const selectedImage = colors[0].caruselImages[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(_id, productName, price, selectedColor, selectedImage, 1);
  };

  return (
    <div className='product'> 
        <img src={selectedImage} alt={productName} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p> ${price}</p>
        </div>
        <button className='addToCartBttn' onClick={handleAddToCart}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );
};
