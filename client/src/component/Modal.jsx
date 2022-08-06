import React, { useContext } from "react";
import "../css/Modal.css";
import { ContextProvider } from "../config/Context";
import { BiX } from "react-icons/bi";
import {FcGoogle} from "react-icons/fc"

function Modal() {
  const { mdl } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  return (
    <>
      <div className="modal_container">
        <div className="modal">
          <div className="modal_top">
            <p className="modal_text">Login</p>
            <BiX size="25" className="close"  onClick={() => setModal(!modal)}/>
          </div>
          <button className="signin"> <FcGoogle size="25"/>Sign in with Google</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
