import React from "react";
import "../css/Sidebar.css"
import {BiHome} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"
import {FaRegLightbulb} from "react-icons/fa"

function Main() {
  return (
    <>
      {/* Sidebar */}
      <div className="sidebar">
      <ul>
        <li><a href="/" className="active"><BiHome size="20"/>Home</a></li>
        <li><a href="/" ><MdOutlineExplore size="20"/>Explore</a></li>
        <li><a href="/" ><FaRegLightbulb size="20"/>My Ideas</a></li>
      </ul>
      </div>
    </>
  );
}

export default Main;
