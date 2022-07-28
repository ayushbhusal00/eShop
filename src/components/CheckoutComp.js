import React from "react";
import "./CheckoutComp.css";
import CheckoutProduct from "./CheckoutProduct";
import SubtotalComp from "./SubtotalComp";
import { useStateValue } from "../StateProvider";

function CheckoutComp() {
  /* eslint-disable no-unused-vars */
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                imageURL={item.imageURL}
                altImage={item.altImage}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubtotalComp />
      </div>
    </div>
  );
}

export default CheckoutComp;
