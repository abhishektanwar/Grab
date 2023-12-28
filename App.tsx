import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RestaurantCart from './components/RestaurantCard';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <SearchBar />
      <RestaurantCart />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
