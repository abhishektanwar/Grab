import React from 'react';
import StarRating from './StarRating';

const RestaurantCard = ({resData}) => {

  return (
    <div className="restaurant-card-container">
      <img className="restaurant-card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} />
        <div className="restaurant-card-title-container">
          <div className="restaurant-card-title">{resData.name}</div>
          <StarRating rating={resData.avgRating} />
        </div>
        <div className='restaurant-card-cuisines-container'>
          <div className='restaurant-card-cuisines'>
            {resData.cuisines.join(",")}
          </div>
          <div className='restaurant-card-avg-price'>
            {resData.costForTwo}
          </div>
        </div>
      </div>
  );
};

export default RestaurantCard;