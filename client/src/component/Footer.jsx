import React from "react";
import "../css/Footer.css";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <p className="footer_text">
          Made with ❤️ by Utsav Bhattarai || Thanks to <span> Dev.to</span>⚡
          and <span>Redis</span>🔥
        </p>
        <div className="footer_link_wrapper">
          <a href="https://twitter.com/utsavbhatrai007" target={"_blank"}>
            <div className="footer_link t">
              <AiOutlineTwitter />
            </div>
          </a>
          <a href="https://github.com/utsavbhattarai007" target={"_blank"}>
            <div className="footer_link g">
              <AiOutlineGithub />
            </div>
          </a>
          <a href="http://instagram.com/utsavbhattarai007" target={"_blank"}>
            <div className="footer_link i">
              <AiOutlineInstagram />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
