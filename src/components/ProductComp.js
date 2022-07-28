import React from "react";
import "./ProductComp.css";

function ProductComp({ id, title, price, rating, imageURL, altImage }) {
  /* eslint-disable no-unused-vars */

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">{price}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={imageURL} alt={altImage} className="product__image" />

      <button className="product__addToCart">Add to cart</button>
    </div>
  );
}

export default ProductComp;
