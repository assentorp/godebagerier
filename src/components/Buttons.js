import React from "react";

const Buttons = ({ changeFoodState, foodState, setFilter, filter }) => {
  const saveValue = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log("form submitted ✅");
  };
  return (
    <div className="button-flex">
      <div className="buttons">
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
      <form action="." onSubmit={handleSubmit}>
        <input
          type="search"
          value={filter}
          onChange={saveValue}
          placeholder="Søg efter bageri..."
        />
      </form>
    </div>
  );
};

export default Buttons;
