import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({rating}) => {
  return <div className="star-rating">
    <span className="rating">{rating}</span>
    <FontAwesomeIcon className="star" icon={faStar} inverse size="xs" />
  </div>
}

export default StarRating