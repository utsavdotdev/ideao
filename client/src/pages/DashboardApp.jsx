import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppHome from "../component/parts/AppHome";

function DashboardApp() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
          <AppHome/>
        </div>
        <div className="other"></div>
      </div>
      <AddIdea/>
    </>
  );
}

export default DashboardApp;
