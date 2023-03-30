import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [hoverLink, setHoverLink] = useState(null);
  const activeLinkRef = useRef(null);
  const lineRef = useRef(null);

  const links = [
    { path: "/", label: "Strona główna" },
    { path: "/lotto", label: "Lotto" },
    { path: "/eurojackpot", label: "EuroJackpot" },
    { path: "/minilotto", label: "MiniLotto" },
  ];

  const onMouseEnterLink = (e) => {
    const rect = e.target.getBoundingClientRect();
    lineRef.current.style.transform = `translateX(${rect.left}px)`;
    lineRef.current.style.width = `${rect.width}px`;
  };

  const onMouseLeaveLink = () => {
    if (!activeLinkRef.current) return;
    const rect = activeLinkRef.current.getBoundingClientRect();
    lineRef.current.style.transform = `translateX(${rect.left}px)`;
    lineRef.current.style.width = `${rect.width}px`;
  };

  return (
    <nav className=" navbar">
      <div className="flex navbar-logo">
        <img src={logo} className="h-10 mx-2"/>
        <h2>LotoGeneria</h2>
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => {
                `navbar-link ${isActive ? "navbar-link-active" : ""}`;
              }}
              onMouseEnter={onMouseEnterLink}
              onMouseLeave={onMouseLeaveLink}
              ref={(el) => {
                if (el && el.classList.contains("navbar-link-active")) {
                  activeLinkRef.current = el;
                  const rect = el.getBoundingClientRect();
                  lineRef.current.style.transform = `translateX(${rect.left}px)`;
                  lineRef.current.style.width = `${rect.width}px`;
                }
              }}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-line" ref={lineRef}></div>
    </nav>
  );
};

export default Navbar;
