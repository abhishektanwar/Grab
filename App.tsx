import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './assets/logo.png';

const Header = () => {
  return (
    <div className='header-contianer'>
      <div className='logo-contianer'>
        <img src={Logo} className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li className='h4 nav-item'>
            Home
          </li>
          <li className='h4 nav-item'>About Us</li>
          <li className='h4 nav-item'>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
