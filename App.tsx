import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RestaurantCart from './components/RestaurantCard';
import RestaurantsContainer from './components/RestaurantsContainer';

const App = () => {
  
  return (
    <div className='app'>
      <Header />
      <SearchBar />
      <RestaurantsContainer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
