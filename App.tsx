import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RestaurantCart from './components/RestaurantCard';

const App = () => {
  const [restaurants,setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9942072&lng=77.6666151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      })
  }, [])

  if(restaurants.length === 0){
    return <div />
  }

  return (
    <div className='app'>
      <Header />
      <SearchBar />
      <div className='restaurants-container'>
        {
          restaurants.map((restaurant)=>{
            return <RestaurantCart resData = {restaurant.info} />
          })
        }
        {/* <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart /> */}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
