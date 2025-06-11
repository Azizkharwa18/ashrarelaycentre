import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaBullhorn,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaCarSide ,
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="header-border">
        <img src="/headerborder.svg" alt="border" />
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <NavLink to="/" className="pill-logo2">
            <img src="/relay.svg" alt="relay Logo" />
          </NavLink>

          {/* Hamburger icon (mobile only) */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="menu-item" onClick={() => setMenuOpen(false)}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/announcements" className="menu-item" onClick={() => setMenuOpen(false)}>
            <FaBullhorn /> Announcements
          </NavLink>
          <NavLink to="/zones" className="menu-item" onClick={() => setMenuOpen(false)}>
            <FaMapMarkedAlt /> Waaz Centres
          </NavLink>
          <NavLink to="/guidelines" className="menu-item" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle /> General Guidelines
          </NavLink>
          <NavLink to="/travelguide" className="menu-item" onClick={() => setMenuOpen(false)}>
            <FaCarSide/> Transport Guidelines
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
