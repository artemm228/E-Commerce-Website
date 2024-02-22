import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Product } from '../shop/product';
import axios from 'axios';
import './search.css';

export const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/search?query=${searchQuery}`);
        const results = response.data;
        setSearchResults(results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery, location.search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='shopTitle'>Search Results for "{searchQuery}"</h1>
      {searchResults.length === 0 ? (
        <div className='shopTitle'>No results found</div>
      ) : (
        <div className='products'>
          {searchResults.map((result) => (
            <Link to={`/product/${result._id}`} key={result._id} className='product-link'>
              <Product data={result} />
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};