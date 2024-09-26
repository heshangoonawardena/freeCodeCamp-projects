import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = () => {
  const noOfStars = 5;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    rating == index + 1 ? setRating(0) : setRating(index + 1);
    // setRating(index + 1);
  };

  const handleHover = (index) => {
    setHover(index + 1);
  };

  const handleHoverOut = () => {
    setHover(0);
  };

  return (
    <div className="container">
      {[...Array(noOfStars)].map((_, index) => {
        // index += 1;
        return (
          <FaStar
            onClick={() => handleClick(index)}
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleHoverOut}
            size={50}
            key={index}
            className={index < (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
