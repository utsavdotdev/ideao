import React from "react";
import "../css/Sidebar.css";
import { BiHome } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/app">
              <BiHome size="20" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore">
              <MdOutlineExplore size="20" />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" >
              <BiSearchAlt size="20" />
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/myidea" >
              <FaRegLightbulb size="20" />
              My Ideas
            </NavLink>
          </li>
        </ul>
        <div className="divider1"></div>
        <div className="social_link">
          <a href="https://twitter.com/utsavbhatrai007" target={"_blank"}>
            <div className="link a">
              <FaTwitter size={20} />
            </div>
          </a>
          <a href="https://github.com/utsavbhattarai007" target={"_blank"}>
            <div className="link b">
              <FaGithub size={20} />
            </div>
          </a>
          <a href="http://instagram.com/utsavbhattarai007" target={"_blank"}>
            <div className="link c">
              <FaInstagram size={20} />
            </div>
          </a>
        </div>
        <div className="bottommost">
        <div className="divider2"></div>
          <p className="copyright">&copy; 2022 Ideao</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
