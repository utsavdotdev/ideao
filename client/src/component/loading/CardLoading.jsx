import React from "react";
import "../../css/CardLoading.css";

const CardLoading = () => {
  return (
    <>
      <div className="card_loading_container">
        <div className="card_loading_name_container">
          <div className="card_loading_pp_image"></div>
          <div className="card_loading_name_wrapper">
            <div className="card_loading_name"></div>
            <div className="card_loading_date"></div>
          </div>
        </div>
        <div className="card_loading_des_container">
          <div className="card_loading_title"></div>
          <div className="card_loading_des"></div>
        </div>
      </div>
      <div className="card_loading_divider"></div>
    </>
  );
};

export default CardLoading;
