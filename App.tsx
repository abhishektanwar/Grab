import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => <h1>Grab you food now!!!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Heading />
  </React.StrictMode>
);
