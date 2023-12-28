import React from 'react';
import foodImage from '../assets/restaurantCard.jpg';
import StarRating from './StarRating';

const RestaurantCart = () => {
  return (
    <div className="restaurant-card-container">
      <img className="restaurant-card-image" src={foodImage} />
        <div className="restaurant-card-title-container">
          <div className="restaurant-card-title">Food Lab</div>
          <StarRating />
        </div>
        <div className='restaurant-card-cuisines-container'>
          <div className='restaurant-card-cuisines'>
            Pizza, Burger, Sandwich, Biryano, Chinese
          </div>
          <div className='restaurant-card-avg-price'>
            Rs. 250 for two
          </div>
        </div>
      </div>
  );
};

export default RestaurantCart;
