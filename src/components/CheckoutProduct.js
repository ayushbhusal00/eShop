import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, rating, imageURL, altImage }) {
  /* eslint-disable no-unused-vars */
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__product" key={id}>
      <img src={imageURL} alt={altImage} className="checkout__product__image" />
      <div className="checkout__product__info">
        <p>{title}</p>
        <p className="checkout__product__price">{price}</p>
        <div className="checkout__product__rating">{rating}⭐⭐⭐</div>
        <button
          className="checkout__product__addToCart"
          onClick={removeFromBasket}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
