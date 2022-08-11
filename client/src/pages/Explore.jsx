import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppExplore from "../component/parts/AppExplore"

function Explore() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
          <AppExplore/>
        </div>
        <div className="other"></div>
      </div>
      <AddIdea/>

    </>
  );
}

export default Explore;
