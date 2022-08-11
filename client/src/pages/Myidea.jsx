import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppMyidea from "../component/parts/AppMyidea"

function Myidea() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
           <AppMyidea/>
        </div>
        <div className="other"></div>
      </div>
      <AddIdea />
    </>
  );
}

export default Myidea;
