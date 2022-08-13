import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppMyidea from "../component/parts/AppMyidea"
import Stat from "../component/Stat";

function Myidea() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
           <AppMyidea/>
        </div>
        <div className="other">
          <Stat/>
        </div>
      </div>
      <AddIdea />
    </>
  );
}

export default Myidea;
