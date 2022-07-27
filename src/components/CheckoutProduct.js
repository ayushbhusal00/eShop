import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkout__product">
      <img
        src="https://m.media-amazon.com/images/I/81WCYxxv0ML._AC_SL1365_.jpg"
        alt="insulation-thurmus-bag"
        className="checkout__product__image"
      />
      <div className="checkout__product__info">
        <p>
          Insulated Lunch Bag for Men/Womens, Lunch Box,Upgraded version Double
          Deck (Black-1)
        </p>
        <p className="checkout__product__price">12.5</p>
        <div className="checkout__product__rating">⭐⭐⭐</div>
        <button className="checkout__product__addToCart">Add to cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
