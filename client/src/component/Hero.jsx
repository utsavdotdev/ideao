import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";

function Hero() {
  return (
    <>
      <section className="hero_container">
        <div className="hero_wrapper">
          <div className="hero_top">
            <h1 className="hero_heading">
              Introducing <span className="text_logo">Ideao</span>
            </h1>
          </div>
          <div className="hero_bottom">
            <p className="hero_sub_heading">
              Ideao is the web platform for exploring and contributing the
              awesome ideas which helps developer to craft them.{" "}
            </p>
            <div className="hero_btn_con">
              <Link to="/app">
                <button className="hero_try">
                  <p className="hero_btn_text">Try It now🚀</p>
                </button>
              </Link>
              <button className="hero_github">
                <p className="hero_btn_text">Github</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
