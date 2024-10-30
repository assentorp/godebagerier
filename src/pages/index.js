import React, { useState, useLayoutEffect } from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Places from "../components/Places";
import Buttons from "../components/Buttons";
import Aboutus from "../components/Aboutus";
import MapContainer from "../components/Maps";
import MapsButtons from "../components/MapsButtons";
import Seo from "../components/SEO";
import Helmet from "react-helmet";

const IndexPage = () => {
  const [foodState, setFoodState] = useState("All");
  const [openRestaurant, setOpenRestaurant] = useState();
  const [filter, setFilter] = useState("");
  const [, setWidth] = useState(
    typeof window !== `undefined` ? window.innerWidth : null
  );
  const [mapToggle, setMapToggle] = useState(
    typeof window !== `undefined` ? window.innerWidth > 520 : null
  );
  const changeFoodState = (item) => {
    setFoodState(item.target.id);
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  };
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleMap = () => {
    setMapToggle(!mapToggle);
  };

  return (
    <div className="wrapper">
      <Seo
        title="60 gode bagerier i København → godebagerier.dk"
        description="Et overblik over de bedste gode bagerier i København og omegn. Bagerierne er kommet på ud for tre centrale kriterier: Smag, Stemning og Service."
      />
      <Helmet>
        <meta
          name="google-site-verification"
          content="KXgkR1ozAc-ERa6LPhvP_an8dUpix0wW4WoCb5RLPIo"
        />
      </Helmet>
      <div className="left-container">
        <div className="top">
          <Header />
          <Buttons
            changeFoodState={changeFoodState}
            foodState={foodState}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <Places
          filter={filter}
          setFilter={setFilter}
          foodState={foodState}
          setOpenRestaurant={setOpenRestaurant}
        />
        <Aboutus />
      </div>
      {mapToggle ? (
        <MapsButtons changeFoodState={changeFoodState} foodState={foodState} />
      ) : null}
      <button className="maps-toggle" onClick={toggleMap}>
        {mapToggle ? (
          <div className="maps-toggle-inside">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z" />
            </svg>
            <span>Fjern kort</span>
          </div>
        ) : (
          <div className="maps-toggle-inside">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z" />
            </svg>
            <span>Vis kort</span>
          </div>
        )}
      </button>
      {mapToggle ? (
        <div className="map-container">
          <MapContainer
            openRestaurant={openRestaurant}
            setOpenRestaurant={setOpenRestaurant}
            foodState={foodState}
            mapToggle={mapToggle}
          />
        </div>
      ) : null}
    </div>
  );
};

export default IndexPage;
