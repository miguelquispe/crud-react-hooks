import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <a href="#all" className="btn btn-link">
          Todos
        </a>
        <a href="#cat" className="btn btn-link">
          Cat 1
        </a>
        <a href="#cat" className="btn btn-link">
          Cat 2
        </a>
      </div>
    </div>
  );
};

export default NavBar;
