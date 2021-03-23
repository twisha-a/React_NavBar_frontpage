import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHandPeace } from "react-icons/fa";
import { Button } from "./Button";
import "./navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaHandPeace className="navbar-icon" />
              AT YOUR DOOR
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Market"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Shop in our Market
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Deliver"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Want to Deliver Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Sale"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sale and Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Sponsor"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sponsor
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/Contact" className="nav-links">
                  Contact Us
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn--link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Sign up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
