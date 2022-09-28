import React from "react";
import "../styles/navbar.css";
import NoFound from "../main_pages/NoFound";
function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          Student Data Management
        </div>
        <div className="navbar__item">
          <a href="/Register" target={<NoFound/>}> Register Data</a>
        </div>
        <div className="navbar__item">
          {" "}
          <a href="/newUserData"target={<NoFound/>} >Get Student Data </a>
        </div>
        <div className="navbar__item">
          <a href="/QR" target={<NoFound/>}>Generate QR</a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
