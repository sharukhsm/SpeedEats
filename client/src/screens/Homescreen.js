import React from "react";
import menuItems from "../foodItemData";
import FoodItem from "../components/FoodItem";

function Homescreen() {
  return (
    <div>
      <div className="row">
        {menuItems.map((food) => {
          return (
            <div className="col-md-4">
              <FoodItem food={food} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homescreen;
