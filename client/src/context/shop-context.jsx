import React, { createContext, useState} from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');

    const addToCart = async (itemId, productName, price, color, imageUrl, quantity) => {
      try {
        const response = await axios.post('http://localhost:5000/cart/add', {itemId, productName, price, color, imageUrl, quantity} );
        console.log(response.data.message);

        if (response.status === 200) {
          const updatedCartItems = [...cartItems];
          const existingItemIndex = updatedCartItems.findIndex(item => item.itemId === itemId && item.color === color);
    
          if (existingItemIndex !== -1) {
            updatedCartItems[existingItemIndex].quantity += quantity;
            updateQuantity(itemId, color, updatedCartItems[existingItemIndex].quantity);
          } else {
            updatedCartItems.push({
              itemId,
              productName,
              price,
              color,
              imageUrl,
              quantity
            });
            updateQuantity(itemId, color, quantity);
          }
    
          setCartItems(updatedCartItems);
        } else {
          console.error('Failed to add item to cart');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const removeFromCart = async (itemId, color, quantity) => {
      try {
        const response = await axios.post('http://localhost:5000/cart/remove', { itemId, color, quantity });
        console.log(response.data.message);
    
        if (response.status === 200) {
          const updatedCartItems = cartItems.map(item => {
            if (item.itemId === itemId && item.color === color) {
              item.quantity -= quantity;
            }
            return item;
          }).filter(item => item.quantity > 0);
    
          setCartItems(updatedCartItems);
        } else {
          console.error('Failed to remove item from cart');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const removeItemFromCart = async (itemId, color) => {
      try {
        const response = await axios.post('http://localhost:5000/cart/remove-item', { itemId, color }
        );
        console.log(response.data.message);
    
        const updatedCartItems = cartItems.filter(item => item.itemId !== itemId || item.color !== color);
        setCartItems(updatedCartItems);
      } catch (error) {
        console.error(error);
      }
    };
  
    const updateQuantity = async (itemId, color, newQuantity) => {
      try {
        const response = await axios.post('http://localhost:5000/cart/update', { itemId, color, newQuantity });
        console.log(response.data.message);

        if (response.status === 200) {
          const updatedItems = cartItems.map(item => {
            if (item.itemId === itemId && item.color === color) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
          setCartItems(updatedItems);
        } else {
          console.error('Failed to update quantity');
        }

      } catch (error) {
        console.error(error);
      }
    };

    const totalCartPrice = () => {
      const totalPrice = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      return totalPrice.toFixed(2);
    };

    const contextValue = { 
        cartItems,
        setCartItems,
        addToCart, 
        removeFromCart,
        removeItemFromCart,
        updateQuantity, 
        selectedColor,
        setSelectedColor,
        totalCartPrice,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};