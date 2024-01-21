import React from "react";

function FoodItem({ food }) {
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
          <p> Varients</p>
          <select>
            {food.variants.map((variants) => {
              return <option value={variants}>{variants}</option>;
            })}
          </select>
        </div>

        <div className="w-100">
          <p> Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
