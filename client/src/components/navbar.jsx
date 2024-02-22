import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { ShoppingCart, MagnifyingGlass, List , X } from 'phosphor-react';
import { SidebarData } from './SidebarData'

import "./navbar.css";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const showSidebar = () => {
    setSidebar(!sidebar);

    if (!sidebar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <div className="navbar">
      <div className="links">
        <div className="left-links">
          <Link to="#" className="menu-bars">
            <List size={40} onClick={showSidebar} />
          </Link>
          <Link to="/" className="shop-link">
            iShop
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" id="close-bar">
                <X size={33} />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className="nav-icon">{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="search-container">
              <div className="search">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search"         
                />
              </div>
              <ul className="autocomplete">{/* Render autocomplete results here */}</ul>

              <div className="search-link">
                <Link onClick={handleSearch}>
                  <MagnifyingGlass size={32} className="search-icon" />
                </Link>
              </div>
        </div>

        <Link to="/cart" className="cart-link">
          <ShoppingCart size={37} className="cart-icon" />
        </Link>
      </div>
    </div>
  );
};
