import React from "react";
import "./ProductComp.css";

function ProductComp({ title, price, rating, imageURL, altImage }) {
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
