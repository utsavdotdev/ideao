import React from "react";
import "../css/Stat.css";

const Stat = () => {
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
              <p className="stat_data">10k</p>
            </div>
            <div className="stat_data_wrapper">
              <p className="stat_data_title">Ideas</p>
              <p className="stat_data">20.1k</p>
            </div>
          </div>
        </div>
        <div className="stat_divider"></div>
        <div className="stat_container">
          <div className="stat_user_con">
            <p className="stat_title">Top Ideans</p>
            <div className="stat_user_data_con">
              <div className="stat_user_wrapper">
                <img
                  src="https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46"
                  className="stat_user_img"
                />
                <p className="stat_user_name">Utsav Bhattarai</p>
              </div>
              <div className="stat_user_wrapper">
                <img
                  src="https://lh3.googleusercontent.com/a-/AFdZucq7tvFf9oF0xuSDGrwVXYYJi_oxRg2NkymzUMvJkw=s80-p"
                  className="stat_user_img"
                />
                <p className="stat_user_name">Rajesh Khadka</p>
              </div>
              <div className="stat_user_wrapper">
                <img
                  src="https://lh3.googleusercontent.com/a-/AFdZucoVQi4KE7iiHdK8iMwYhFLDqloz_IGgl1m72TFk6Q=s64-p-k-rw-no"
                  className="stat_user_img"
                />
                <p className="stat_user_name">Sushil Bhattarai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
