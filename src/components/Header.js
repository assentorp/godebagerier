import React from "react";
import logo from "../../static/godebagerier-logo.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="toptop">
        <a
          href="https://goderestauranter.dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GodeRestauranter.dk
        </a>
        <span>&bull;</span>
        <a
          href="https://godekaffebarer.dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GodeKaffebarer.dk
        </a>
        <a
          href="https://godebagerier.dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GodeBagerier.dk
        </a>
      </div>
      <header>
        <a href="/" target="_self" aria-label="godebagerier.dk">
          <img src={logo} alt="" height="48" />
        </a>
        <svg
          className="bouncearrow"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#111"
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <a
          href="https://www.instagram.com/goderestauranter.dk/"
          target="_blank"
          className="instagramFollow"
          rel="noopener noreferrer"
          aria-label="Følg godebagerier.dk på Instagram"
        >
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
        </a>
      </header>
    </div>
  );
};

export default Header;
