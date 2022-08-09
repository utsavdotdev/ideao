import React, { useContext } from "react";
import "../css/Modal.css";
import { ContextProvider } from "../config/Context";
import { BiX } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import ModalContainer from "./ModalContainer";

function LoginModal() {
  const { mdl } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  return (
    <>
      <ModalContainer style={{width: 'min(300px,80%)'}}>
        <div className="modal_top">
          <p className="modal_text">Login</p>
          <BiX size="25" className="close" onClick={() => setModal(!modal)} />
        </div>
        <Link to="/app">
          <button className="signin">
            {" "}
            <FcGoogle size="25" />
            Sign in with Google
          </button>
        </Link>
      </ModalContainer>
    </>
  );
}

export default LoginModal;
