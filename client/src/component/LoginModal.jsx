import React, { useContext, useEffect } from "react";
import "../css/LoginModal.css";
import { ContextProvider } from "../config/Context";
import { BiX } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import ModalContainer from "./ModalContainer";
import { useGoogleLogin } from "react-google-login";
import { toast } from "react-toastify";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import moment from "moment";

function LoginModal() {
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const { mdl } = useContext(ContextProvider);
  const [modal, setModal] = mdl;
  const onSuccess = async (res) => {
    setModal(!modal);
    const { profileObj } = res;
    const userRes = await axios.post(
      `${url}/api/user`,
      {
        user_gid: profileObj?.googleId,
        user_name: profileObj?.name,
        user_email: profileObj?.email,
        user_doc: moment().format("ll"),
        user_pic: profileObj?.imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (userRes.data.msg === "LogIn") {
      Cookies.set("token", userRes.data.token, { expires: 7 });
      toast.success("Successfully LogIn");
      window.location.reload();
      navigate("/app", { replace: true });
    } else {
      Cookies.set("token", userRes.data.token, { expires: 7 });
      toast.success("Successfully SignIn");
      window.location.reload();
      navigate("/app", { replace: true });
    }
  };
  const onFailure = (err) => {
    toast.error("Something Wrong");
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    onFailure,
  });

  return (
    <>
      <ModalContainer style={{ width: "min(300px,80%)" }}>
        <div className="modal_top">
          <p className="modal_text">Login</p>
          <BiX size="25" className="close" onClick={() => setModal(!modal)} />
        </div>
        <button className="signin" onClick={signIn}>
          {" "}
          <FcGoogle size="25" />
          Sign in with Google
        </button>
      </ModalContainer>
    </>
  );
}

export default LoginModal;
