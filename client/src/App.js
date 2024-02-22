import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Details } from './details/details';
import { Smartphones } from './pages/catalog/smartphones';
import { Watches } from './pages/catalog/watches';
import { SearchPage } from './pages/search/search';
import { Laptops } from './pages/catalog/laptops';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Shop />} />   
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/product/:id' element={<Details />} />
                  <Route path='/smartphones' element={<Smartphones />} />
                  <Route path='/watches' element={<Watches />} />
                  <Route path='/laptops' element={<Laptops />} />
                  <Route path="/search" element={<SearchPage location={window.location} />} />
              </Routes>
          </Router>
        </ShopContextProvider>
    </div>
  );
};

export default App;
