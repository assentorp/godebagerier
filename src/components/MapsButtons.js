import React from "react";

const MapsButtons = ({ changeFoodState, foodState }) => {
  return (
    <div className="maps-buttons">
      <button
        onClick={changeFoodState}
        className={foodState === "All" ? "active" : ""}
        id="All"
      >
        Alle
      </button>
      <button
        onClick={changeFoodState}
        className={foodState === "Bakery" ? "active" : ""}
        id="Bakery"
      >
        Gode Bagerier
      </button>
      <button
        onClick={changeFoodState}
        className={foodState === "Coffee" ? "active" : ""}
        id="Coffee"
      >
        God Kaffe
      </button>
    </div>
  );
};

export default MapsButtons;
