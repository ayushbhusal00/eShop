import React from "react";
import "./ProductComp.css";
import { useStateValue } from "../StateProvider";

function ProductComp({ id, title, price, rating, imageURL, altImage }) {
  /* eslint-disable no-unused-vars */
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        imageURL: imageURL,
        altImage: altImage,
      },
    });
  };

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

      <button className="product__addToCart" onClick={addToBasket}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductComp;
