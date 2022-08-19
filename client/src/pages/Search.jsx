import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css/Layout.css";
import AddIdea from "../component/AddIdea";
import AppSearch from "../component/parts/AppSearch";
import Stat from "../component/Stat";
import Page from "../component/Page";

function Search() {
  return (
    <>
      <Page title="Search">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <div className="main">
            <AppSearch />
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

export default Search;
