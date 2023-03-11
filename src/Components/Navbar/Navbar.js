import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assests/images/logo.png";
import BurgerMenu from './BurgerMenu/Navbar';

function Navbar() {
  return (
    <div>
      <BurgerMenu />
      <nav className="navbar">
        <div className="logo-container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navitems">
          <NavLink to="/" className="navchild">
            <div>Home</div>
          </NavLink>
          <NavLink to="/about" className="navchild">
            <div>About</div>
          </NavLink>
          <NavLink to="/speakers" className="navchild">
            <div>Speakers</div>
          </NavLink>
          <NavLink to="/talks" className="navchild">
            <div>Talks</div>
          </NavLink>
          <NavLink to="/team" className="navchild">
            <div>Team</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar
