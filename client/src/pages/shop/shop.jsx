import React, { useState, useEffect } from 'react';
import { Product } from './product';
import { Link } from 'react-router-dom';
import './shop.css';

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const phoneProducts = products.filter(product => product.category === 'phone').sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 3);
  const laptopProducts = products.filter(product => product.category === 'laptop').sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 3);
  const watchProducts = products.filter(product => product.category === 'watches').slice(0, 3);


  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Devices</h1>
      </div>

      <div className='products'>
        {phoneProducts.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className='product-link'>
            <Product data={product} />
          </Link>
        ))}

        {laptopProducts.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className='product-link'>
            <Product data={product} />
          </Link>
        ))}

        {watchProducts.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className='product-link'>
            <Product data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;