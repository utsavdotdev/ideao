import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";

function DashboardApp() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">Home</div>
        <div className="other"></div>
      </div>
    </>
  );
}

export default DashboardApp;
