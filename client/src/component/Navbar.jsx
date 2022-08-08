import React, {  useContext } from "react";
import "../css/Navbar.css";
import { RiLightbulbFlashLine as Logo } from "react-icons/ri";
import { ContextProvider } from "../config/Context";
import {Link} from "react-router-dom"
import Modal from "./Modal";
function Navbar() {
  const { mdl } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  return (
    <>
    {modal && <Modal/>}
      <div className="nav_container">
        <div className="left">
          <div className="logo">
            <Logo size="25" />
          </div>
          <Link to="/"><h3 className="logo_text">Ideao</h3></Link>
        </div>
        <div className="right">
          <button className="btn" onClick={() => setModal(!modal)}>
            <p className="login">
              Login
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
