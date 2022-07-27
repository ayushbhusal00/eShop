import React from "react";
import "./CheckoutComp.css";
import CheckoutProduct from "./CheckoutProduct";
import SubtotalComp from "./SubtotalComp";

function CheckoutComp() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/S/aplus-media/sota/c6f31d38-9681-4230-8faa-c756f0f188f6.__CR0,0,970,300_PT0_SX970_V1___.png"
          alt="Coumbia-Ads"
          className="checkout__ads"
        />
        <div className="checkout__products">
          <h2 className="checkout__title"></h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <SubtotalComp />
      </div>
    </div>
  );
}

export default CheckoutComp;
