import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState("");

  const handleToggle = () => {
    toggleNav ? setToggleNav("") : setToggleNav("active");
  };
  return (
    <header>
      <div className="logo">Creative Agency</div>
      <div onClick={handleToggle} className={`toggle ${toggleNav}`}></div>
      <div className={`navigation ${toggleNav}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="social-bar">
          <ul>
            <li>
              <a href="https://facebook.com">
                <img src="images/facebook.png" target="_blank" alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src="images/twitter.png" target="_blank" alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src="images/instagram.png" target="_blank" alt="" />
              </a>
            </li>
          </ul>
          <a href="mailto:you@email.com" className="email-icon">
            <img src="images/email.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
