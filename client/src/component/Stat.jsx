import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../config/Context";
import "../css/Stat.css";

const Stat = () => {
  const { st, tp } = useContext(ContextProvider);
  const [stat, setStat] = st;
  const [top, setTop] = tp;
  const url = import.meta.env.VITE_API_URL;
  return (
    <>
      <div className="stat_con">
        <div className="stat_container">
          <div className="stat_title_con">
            <p className="stat_title">Ideao Stat</p>
            <div className="stat_title1_btn">
              <p className="stat_title2"> Overview</p>
            </div>
          </div>
          <div className="stat_data_con">
            <div className="stat_data_wrapper">
              <p className="stat_data_title">Users</p>
              <p className="stat_data">
                {stat === undefined ? "..." : stat?.user}
              </p>
            </div>
            <div className="stat_data_wrapper">
              <p className="stat_data_title">Ideas</p>
              <p className="stat_data">
                {stat === undefined ? "..." : stat?.idea}
              </p>
            </div>
          </div>
        </div>
        <div className="stat_divider"></div>
        <div className="stat_container">
          <div className="stat_user_con">
            <p className="stat_title">Top Ideans</p>
            <div className="stat_user_data_con">
              {top === undefined ? (
                <p>Fetching . . .</p>
              ) : (
                top?.map((data, i) => (
                  <div key={i} className="stat_user_wrapper">
                    <img src={data[0]?.user_pic} className="stat_user_img" />
                    <p className="stat_user_name">{data[0]?.user_name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
