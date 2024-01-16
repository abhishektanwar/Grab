import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantsContainer from './components/RestaurantsContainer';
import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';

const App = () => {

  
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<RestaurantsContainer />
      },
      {
        path:'/about',
        element:<About />,
      }
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
