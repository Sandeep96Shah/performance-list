import React from "react";
import FallBackImage from "../../assets/pizza.webp";
import "./styles.css";

const Card = ({ image, instructions, isLCP }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={image || FallBackImage}
          alt="Recipe"
          loading={isLCP ? "eager" : "lazy"}
          fetchpriority={isLCP ? "high" : "auto"}
        />
      </div>
      <div className="description">{instructions}</div>
    </div>
  );
};

export default Card;
