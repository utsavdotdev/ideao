import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../css/Hero.css";

function Hero() {
  return (
    <>
      <section className="hero_container">
        <div className="container">
          <div className="top">
            <h1 className="heading">
              Introducing <span className="text_logo">Ideao</span>
            </h1>
          </div>
          <div className="bottom">
            <p className="sub_heading">
              Ideao is the web platform for exploring and contributing the
              awesome ideas which helps developer to craft them.{" "}
            </p>
            <div className="search_container">
              <input className="search_input" type="text" placeholder="Search Ideas..." />
              <button className="searchbtn">
                <BiSearchAlt size="25" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
