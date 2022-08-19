import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppHome from "../component/parts/AppHome";
import Stat from "../component/Stat";
import Page from "../component/Page";

function DashboardApp() {
  return (
    <>
      <Page title="App">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <div className="main">
            <AppHome />
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

export default DashboardApp;
