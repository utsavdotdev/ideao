import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppExplore from "../component/parts/AppExplore";
import Stat from "../component/Stat";
import Page from "../component/Page";

function Explore() {
  return (
    <>
      <Page title="Explore">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <div className="main">
            <AppExplore />
          </div>
          <div className="other">
            <Stat />
          </div>
        </div>
        <AddIdea />
      </Page>
    </>
  );
}

export default Explore;
