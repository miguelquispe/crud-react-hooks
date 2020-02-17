import React from "react";
import PropTypes from "prop-types";

const NavBar = props => {
  const { categories } = props;
  const handleCategoryClick = category => {
    props.filtered(category);
  };

  return (
    <div className="navbar">
      <div className="navbar-section">
        <button
          className="btn btn-link"
          onClick={() => handleCategoryClick("all")}
        >
          Todos
        </button>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <button
              key={index}
              className="btn btn-link"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NavBar;
