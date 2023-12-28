import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => {
  return <div className="star-rating">
    <span className="rating">4.2</span>
    <FontAwesomeIcon className="star" icon={faStar} inverse size="xs" />
  </div>
}

export default StarRating