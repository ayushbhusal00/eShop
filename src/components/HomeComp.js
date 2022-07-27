import React from "react";
import "./HomeComp.css";
import ProductComp from "./ProductComp";

function HomeComp() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www-cdn.bigcommerce.com/assets/article-blog-headers-generic-seo-store-1.png"
          alt="Ecommerce-Presentation"
          className="home__image"
        />
        <div className="home__row">
          <ProductComp
            id="1"
            title="Benett Mystic 15in bag, beauty and aesthic verified by lombard compass || LC original Supplier"
            price={11.96}
            rating={5}
            imageURL="https://media.kohlsimg.com/is/image/kohls/4981446_Dusty_Pink?wid=600&hei=600&op_sharpen=1"
            altImage="lc-bag"
          />
          <ProductComp
            id="2"
            title="Crirax Galvanized Raised Garden Beds Outdoor for Vegetables,Planters for Outdoor Plants,DIY 12-in-1 Large Metal Garden Bed Planter Boxes Outdoor 1 Set for 12 Shapes Size Garden Planters"
            price={12.8}
            rating={3}
            imageURL="https://m.media-amazon.com/images/I/71wAsugs4CL._AC_SL1500_.jpg"
            altImage="plant-vase-outdoor"
          />
        </div>
        <div className="home__row">
          <ProductComp
            id="3"
            title="Lawn Dethatcher & Scarifier, 12 Inch Working Width, 11 Amp Electric Lawn Dethatcher with a Replacement Raking, 4 Central Adjustable Heights, Tool-Free Assembly, 8 Gallon Grass Collection Bag"
            price={58.0}
            rating={5}
            imageURL="https://m.media-amazon.com/images/I/51tzwRdp-3L._AC_.jpg"
            altImage="lawn-mower"
          />
          <ProductComp
            id="4"
            title="To Go Coffee Cups 120 Pack, Paper Coffee Cups With Lids Straws and Sleeves, Disposable Hot Beverage 12Oz Paper Coffee Cup"
            price={2.0}
            rating={4}
            imageURL="https://m.media-amazon.com/images/I/71R1o9RL+XL._AC_SL1500_.jpg"
            altImage="coffee-paper-mold"
          />
          <ProductComp
            id="5"
            title="Insulated Lunch Bag for Men/Womens, Lunch Box,Upgraded version Double Deck (Black-1)"
            price={12.5}
            rating={3}
            imageURL="https://m.media-amazon.com/images/I/81WCYxxv0ML._AC_SL1365_.jpg"
            altImage="insulation-thurmus-bag"
          />
        </div>
        <div className="home__row">
          <ProductComp
            id="6"
            title="Dog Shaver Clippers Low Noise Rechargeable Cordless Electric Quiet Hair Clippers Set for Dogs Cats Pets"
            price={33.96}
            rating={5}
            imageURL="https://m.media-amazon.com/images/I/61XZtkBhsvL._AC_SL1080_.jpg"
            altImage="dog-clippers"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
