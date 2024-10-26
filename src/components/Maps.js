import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import Restaurant from "./Restaurant";
import data from "../data/restaurants.json";
import coffeesvg from "../../static/coffee.svg";

const Maps = ({ state, foodState, openRestaurant, setOpenRestaurant }) => {
  state = {
    lat: 55.6821674,
    lng: 12.5829889,
    zoom: 13,
  };

  const position = [state.lat, state.lng];
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current && markerRef.current.options.id === openRestaurant) {
      markerRef.current._icon.classList.add("marker-animation"); // add the CSS class to the marker
      markerRef.current.openPopup();
    }
  }, [openRestaurant]);

  if (typeof window !== "undefined") {
    const foodIcon = new L.Icon({
      iconUrl: coffeesvg,
      iconRetinaUrl: coffeesvg,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [37, 43],
    });
    return (
      <div className="maps">
        {/* <ul className="map-link">
          <li>
            <a
              href="https://www.instagram.com/godebagerier.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 98 98"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68 0c16.548.05 29.95 13.452 30 30v38c-.05 16.548-13.452 29.95-30 30H30C13.452 97.95.05 84.548 0 68V30C.05 13.452 13.452.05 30 0zm0 8H30C17.85 8 8 17.85 8 30v38c0 12.15 9.85 22 22 22h38c12.15 0 22-9.85 22-22V30c0-12.15-9.85-22-22-22zM49.27 23.469l.464.004A25.68 25.68 0 0175 49.14c.005 14.177-11.48 25.677-25.657 25.69-14.177.013-25.683-11.466-25.703-25.643-.02-14.178 11.453-25.69 25.63-25.717v-.001zm0 8.001c-9.752.017-17.653 7.918-17.67 17.67a17.68 17.68 0 1017.67-17.67zM75.14 17a5.73 5.73 0 110 11.46 5.73 5.73 0 010-11.46z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <div className="info">
                <div className="title">
                  Find nye gode restauranter først på Instagram
                </div>
                <div className="subtitle">Følg os på @godebagerier.dk</div>
              </div>
            </a>
          </li>
        </ul> */}
        <MapContainer
          center={position}
          zoom={state.zoom}
          scrollWheelZoom={true}
          tap={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {data.map((restaurant) => {
            const category = restaurant.options;
            if (category.indexOf(foodState) >= 0) {
              return (
                <Marker
                  position={[restaurant.latitude, restaurant.longitude]}
                  key={restaurant.id}
                  id={restaurant.id}
                  category={restaurant.options}
                  icon={!!foodIcon ? foodIcon : null}
                  ref={openRestaurant === restaurant.id ? markerRef : null}
                >
                  <Popup>
                    <Restaurant restaurant={restaurant} />
                  </Popup>
                </Marker>
              );
            }
            if (foodState === "All") {
              return (
                <Marker
                  position={[restaurant.latitude, restaurant.longitude]}
                  key={restaurant.id}
                  id={restaurant.id}
                  category={restaurant.options}
                  icon={!!foodIcon ? foodIcon : null}
                  ref={openRestaurant === restaurant.id ? markerRef : null}
                >
                  <Popup>
                    <Restaurant
                      restaurant={restaurant}
                      setOpenRestaurant={setOpenRestaurant}
                    />
                  </Popup>
                </Marker>
              );
            } else {
              return null;
            }
          })}
        </MapContainer>
      </div>
    );
  }
  return null;
};

export default Maps;
