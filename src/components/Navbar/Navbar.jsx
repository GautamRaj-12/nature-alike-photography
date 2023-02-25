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
            <li class="nav-link">About</li>
            <li class="nav-link">Gallery</li>
            <li class="nav-link">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
