import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppSearch from "../component/parts/AppSearch"
import Stat from "../component/Stat";

function Search() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
          <AppSearch />
        </div>
        <div className="other">
          <Stat/>
        </div>
      </div>
      <AddIdea />
    </>
  );
}

export default Search;
