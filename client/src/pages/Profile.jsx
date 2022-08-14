import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import Stat from "../component/Stat";
import AppProfile from "../component/parts/AppProfile";

function Myidea() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
           <AppProfile/>
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
