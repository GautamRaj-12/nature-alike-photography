import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <>
      <header class="header">
        <nav class="navbar">
          <h1 class="navbar-brand">Nature Alike Photography</h1>
          <ul class="nav-links">
            <li class="nav-link">Home</li>
            <li class="nav-link"><a href="#about">About</a></li>
            <li class="nav-link"><a href="#gallery">Gallery</a></li>
            <li class="nav-link"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
