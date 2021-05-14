import React from "react";
import Search from "./Search.js";
import "../Styles/Navbar.css";

function Navbar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light ">
      <div className="navbar-collapse row" id="navbarNav">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Navbar;