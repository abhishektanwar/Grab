import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantsContainer from './components/RestaurantsContainer';

const App = () => {
  
  return (
    <div className='app'>
      <Header />
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
