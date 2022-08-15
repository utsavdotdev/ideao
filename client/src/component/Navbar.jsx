import React, { useContext } from "react";
import "../css/Navbar.css";
import { RiLightbulbFlashLine as Logo } from "react-icons/ri";
import { ContextProvider } from "../config/Context";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
function Navbar() {
  const { mdl } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  const menuToggle = () =>{
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
  }
  return (
    <>
      {modal && <LoginModal />}
      <div className="nav_container">
        <div className="left">
          <div className="logo">
            <Logo size="25" />
          </div>
          <Link to="/">
            <h3 className="logo_text">Ideao</h3>
          </Link>
        </div>
        <div className="right">
          {/* <button className="btn" onClick={() => setModal(!modal)}>
            <p className="login">Login</p>
          </button> */}
          <div className="login_avatar_wrapper">
            <img
              src="https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46"
              alt="avatar"
              className="login_avatar"
              onClick={menuToggle}
            />
            <div className="menu">
              <ul>
                <li>
                  <AiOutlineUser className="navbar_link" />
                  <Link to="/profile" className="navbar_a">My Profile</Link>
                </li>
                <li>
                  <IoLogOutOutline className="navbar_link" />
                  <p className="navbar_a">Sign Out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
