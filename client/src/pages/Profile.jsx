import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import Stat from "../component/Stat";
import AppProfile from "../component/parts/AppProfile";
import Page from "../component/Page";

function Myidea() {
  return (
    <>
      <Page title="Profile">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <div className="main">
            <AppProfile />
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

export default Myidea;
