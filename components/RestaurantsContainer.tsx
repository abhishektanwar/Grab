import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9942072&lng=77.6666151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      });
  }, []);
  if (restaurants.length === 0) {
    return <div />;
  }

  return (
    <div className="restaurants-container">
      {restaurants.map((restaurant) => {
        return <RestaurantCard resData={restaurant.info} />;
      })}
    </div>
  );
};

export default RestaurantsContainer;
