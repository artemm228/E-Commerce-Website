import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../shop/product';

export const Laptops = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.category === 'laptop');
        const sortedProducts = filteredProducts.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        setProducts(sortedProducts);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='watches'>
      <div className='shopTitle' >
        <h1>Watches</h1>
      </div>

      <div className='products'>
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className='product-link'>
            <Product data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};