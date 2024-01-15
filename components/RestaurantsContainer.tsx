import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';

const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState<[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9942072&lng=77.6666151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("halwa",data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      });
  }, []);

  const onFilteringRestaurants = (filteredRestaurants) => {
    setFilteredRestaurants(filteredRestaurants);
  }
    
  return (
    <div>
      <SearchBar restaurants={restaurants} filteredRestaurants={filteredRestaurants} onFilteringRestaurants={onFilteringRestaurants}  />
      <div className="restaurants-container">
      {restaurants.length !== 0 && filteredRestaurants.map((restaurant) => {
        return <RestaurantCard resData={restaurant.info} />;
      })}
    </div>
    </div>
    
  );
};

export default RestaurantsContainer;
