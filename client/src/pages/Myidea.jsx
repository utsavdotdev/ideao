import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";

function Myidea() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">My idea </div>
        <div className="other"></div>
      </div>
      <AddIdea/>

    </>
  );
}

export default Myidea;
