import React, { useContext } from "react";
import "../css/Sidebar.css";
import { VscHome } from "react-icons/vsc";
import { MdOutlineExplore } from "react-icons/md";
import {AiOutlineUser} from "react-icons/ai"
import { IoIosSearch } from "react-icons/io";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import {IoAddCircle} from "react-icons/io5"
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../config/Context";

function Sidebar() {
  const { opn } = useContext(ContextProvider);
  const [open,setOpen] = opn;
  return (
    <>
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/app" className="nav__link">
              <VscHome  className="nav__icon" />
              <span className="nav__name">Home</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/explore" className="nav__link">
              <MdOutlineExplore  className="nav__icon" />
              <span className="nav__name">Explore</span>
            </NavLink>
          </li>
          <li className="nav__item extra" onClick={() => setOpen(!open)}>
            <NavLink to="/explore" className="nav__link">
              <IoAddCircle className="nav__icon" size="32" color="#fff"/>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/search" className="nav__link">
              <IoIosSearch  className="nav__icon"/>
              <span className="nav__name">Search</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/profile" className="nav__link">
              <AiOutlineUser  className="nav__icon" />
              <span className="nav__name">Profile</span>
            </NavLink>
          </li>
        </ul>
        <div className="bottom_part">
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
            <p className="copyright">&copy; {new Date().getFullYear()} Ideao</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
