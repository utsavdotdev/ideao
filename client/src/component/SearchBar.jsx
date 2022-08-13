import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../css/SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search_container">
      <input
        className="search_input"
        type="text"
        placeholder="Search Ideas..."
      />
      <button className="searchbtn">
        <BiSearchAlt size="25" />
      </button>
    </div>
  );
};

export default SearchBar;
