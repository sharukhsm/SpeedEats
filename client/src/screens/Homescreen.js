import React from "react";
import menuItems from "../foodItemData";
import FoodItem from "../components/FoodItem";

function Homescreen() {
  return (
    <div>
      <div className="row">
        {menuItems.map((food) => {
          return (
            <div className="col-md-4 p-3">
              <div
                style={{ margin: "70px" }}
                className="shadow-lg p-3 mb-5 bg-white rounded"
              >
                <FoodItem food={food} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homescreen;
