import React, { useState } from "react";

function FoodItem({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  return (
    <div>
      <h1>{food.name}</h1>
      <img
        src={food.image}
        alt=""
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex-container">
        <div className="w-100">
          <p>Variants</p>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {food.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div>
          <h1>Price : {food.prices[0][variant] * quantity}</h1>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default FoodItem;
