import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__nav">
          <Link to="/" className="header__links">
            <h1 className="header__heading">HESTIA</h1>
          </Link>
          <div className="header__side">
            <Link to="/map" className="header__links">
              <h1 className="header__link">MAP</h1>
            </Link>
            <Link to="/stats" className="header__links">
              <h1 className="header__link">STATS</h1>
            </Link>
            <Link to="/about" className="header__links">
              <h1 className="header__link">ABOUT</h1>
            </Link>
          </div>
        </div>
        <p className="header__text">
          RATING THE NEIGHBOURHOODS OF TODAY FOR A SAFER TOMORROW
        </p>
      </div>
    </header>
  );
}

export default Header;
