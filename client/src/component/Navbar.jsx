import React, { useContext } from "react";
import "../css/Navbar.css";
import { RiLightbulbFlashLine as Logo } from "react-icons/ri";
import { ContextProvider } from "../config/Context";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import {toast} from "react-toastify"
function Navbar() {
  const { mdl,usr } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  const [user,setUser] = usr
  const token = Cookies.get("token")
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
  const signOut = () =>{
    Cookies.remove("token")
    setUser(null)
    toast.success("Successfully SignOut");
    window.location.reload();
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
          {token ? (
            <div className="login_avatar_wrapper">
              <img
                src={user[0]?.user_pic}
                alt="pic"
                className="login_avatar"
                onClick={menuToggle}
              />
              <div className="menu">
                <ul>
                  <li>
                    <AiOutlineUser className="navbar_link" />
                    <Link to="/profile" className="navbar_a">
                      My Profile
                    </Link>
                  </li>
                  <li >
                    <IoLogOutOutline className="navbar_link"/>
                    <p className="navbar_a" onClick={() =>signOut()}>Sign Out</p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className="btn" onClick={() => setModal(!modal)}>
              <p className="login">Login</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
