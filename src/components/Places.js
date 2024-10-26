import React from "react";
import orderBy from "lodash/orderBy";
import Restaurant from "./Restaurant";
import Ad from "./Ad";
import data from "../data/restaurants.json";

const Places = ({ foodState, setOpenRestaurant, filter }) => {
  const newArray = orderBy(data, ["lastvisit"], ["desc"]);
  const count = data.filter((item) => item.options.indexOf(foodState) >= 0);

  return (
    <div className="places">
      <div className="placesTop">
        &nbsp;
        {foodState === "Coffee"
          ? count.length + ` gode kaffebarer i København`
          : foodState === "Bakery"
          ? count.length + ` gode bagerier i København`
          : data.length + ` gode kaffebarer i København`}
      </div>
      <div className="placeIndex">
        {newArray
          .filter(
            (restaurant) =>
              restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
              filter.toLowerCase() === ""
          )
          .map((restaurant, index) => {
            const category = restaurant.options;
            if (category.indexOf(foodState) >= 0) {
              return (
                <Restaurant
                  restaurant={restaurant}
                  key={restaurant.id}
                  setOpenRestaurant={setOpenRestaurant}
                />
              );
            }
            if (foodState === "All") {
              if (index === 2) {
                return (
                  <div key={restaurant.id}>
                    <Ad />
                    <Restaurant
                      restaurant={restaurant}
                      setOpenRestaurant={setOpenRestaurant}
                    />
                  </div>
                );
              } else {
                return (
                  <Restaurant
                    restaurant={restaurant}
                    key={restaurant.id}
                    setOpenRestaurant={setOpenRestaurant}
                  />
                );
              }
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default Places;
