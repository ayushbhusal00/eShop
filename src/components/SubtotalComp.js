import React from "react";
import "./SubtotalComp.css";
import CurrencyFormat from "react-currency-format";

function SubtotalComp() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={2456981}
        displayType={"text"}
        prefix={"$"}
        thousandSeparator={true}
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
      />
      <button className="checkout__button">Proceed to Checkout</button>
    </div>
  );
}

export default SubtotalComp;
