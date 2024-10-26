import React, { useState, useEffect, useCallback } from "react";

const Restaurant = ({ restaurant, setOpenRestaurant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const encodedUrl = encodeURIComponent(restaurant.name);
  const restaurantImage =
    require(`../../static/restaurant/${restaurant.image}`).default;

  const Star = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        viewBox="0 0 24 24"
        width="16"
      >
        <g fill="none">
          <path d="M0 0h24v24H0V0z" />
          <path d="M0 0h24v24H0V0z" />
        </g>
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
      </svg>
    );
  };

  const handleInteraction = useCallback(
    (e) => {
      setOpenRestaurant(restaurant.id);
      e.stopPropagation();
    },
    [restaurant.id, setOpenRestaurant]
  );

  const toggleReview = useCallback(
    (e) => {
      setIsExpanded(!isExpanded);
      e.stopPropagation();
    },
    [isExpanded]
  );

  useEffect(() => {
    const checkTouchSupport = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchSupport();
    window.addEventListener("resize", checkTouchSupport);

    return () => window.removeEventListener("resize", checkTouchSupport);
  }, []);

  return (
    <div
      className="restaurant-wrapper"
      role="presentation"
      onMouseEnter={!isTouchDevice ? handleInteraction : undefined}
      onClick={isTouchDevice ? handleInteraction : undefined}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.target.click();
        }
      }}
      key={restaurant.id}
    >
      <div className="image">
        <img
          src={restaurantImage}
          alt={restaurant.name}
          width="160"
          height="160"
        />
      </div>
      <div className="restaurant">
        <div className="name">
          <a
            href={restaurant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="name"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.target.click();
              }
            }}
            aria-label={`Gå til ${restaurant.name}s hjemmeside`}
          >
            {restaurant.name}
          </a>
        </div>
        <div className="directions">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.google.com/maps/dir/?api=1&destination=" + encodedUrl
            }
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.target.click();
              }
            }}
          >
            {restaurant.address}, {restaurant.city}
          </a>
        </div>
        {restaurant.michelin === 1 ? (
          <div className="michelin">
            <Star />
            <span>
              <b>1</b> michelin stjerne
            </span>
          </div>
        ) : restaurant.michelin === 2 ? (
          <div className="michelin">
            <Star />
            <Star />
            <span>
              <b>2</b> michelin stjerner
            </span>
          </div>
        ) : restaurant.michelin === 3 ? (
          <div className="michelin">
            <Star />
            <Star />
            <Star />
            <span>
              <b>3</b> michelin stjerner
            </span>
          </div>
        ) : null}
        <div className="restaurant-buttons">
          <a
            className="website"
            href={restaurant.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {restaurant.instagram ? (
            <a
              href={restaurant.instagram}
              target="_blank"
              className="instagram"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.target.click();
                }
              }}
              aria-label="Følg godekaffebarer.dk på Instagram"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          ) : null}
          {restaurant.review ? (
            <div className="review">
              <button
                className="reviewopen"
                onClick={toggleReview}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.target.click();
                  }
                }}
                aria-expanded={isExpanded}
                aria-controls={`review-${restaurant.id}`}
              >
                <span>
                  {isExpanded ? "Skjul anmeldelse" : "Vis anmeldelse"}
                </span>
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  className={isExpanded ? "expanded" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4.938 5.438a.557.557 0 0 1-.405-.159L1.158 1.904a.542.542 0 0 1 0-.79.542.542 0 0 1 .791 0l2.989 2.97 2.97-2.97a.542.542 0 0 1 .791 0c.229.21.229.58 0 .79L5.324 5.28a.545.545 0 0 1-.386.159Z" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
        {isExpanded ? (
          <div className="review margin" id={`review-${restaurant.id}`}>
            <div>{restaurant.review}</div>
            <div className="ratings">
              <div className="atmosphere">
                <span className="title">Stemning</span>
                {restaurant.atmosphere === 1 ? (
                  <span>
                    <Star />
                  </span>
                ) : restaurant.atmosphere === 2 ? (
                  <span>
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.atmosphere === 3 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.atmosphere === 4 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.atmosphere === 5 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : null}
              </div>
              <div className="taste">
                <span className="title">Smag</span>
                {restaurant.taste === 1 ? (
                  <span>
                    <Star />
                  </span>
                ) : restaurant.taste === 2 ? (
                  <span>
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.taste === 3 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.taste === 4 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.taste === 5 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : null}
              </div>
              <div className="service">
                <span className="Service">Service</span>
                {restaurant.service === 1 ? (
                  <span>
                    <Star />
                  </span>
                ) : restaurant.service === 2 ? (
                  <span>
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.service === 3 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.service === 4 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : restaurant.service === 5 ? (
                  <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Restaurant;
