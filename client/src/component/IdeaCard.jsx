import React from "react";
import "../css/IdeaCard.css";
const IdeaCard = () => {
  return (
    <>
      <div className="idea_card_container">
        <div className="idea_card_name_container">
          <img
            src="https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46"
            className="idea_card_pp_image"
            alt="Profile pic"
          />
          <div className="idea_card_name_wrapper">
            <p className="idea_card_name">Utsav Bhattarai</p>
            <p className="idea_card_date">March 25,2022</p>
          </div>
        </div>
        <div className="idea_card_des_container">
          <p className="idea_card_title">This is title</p>
          <p className="idea_card_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            asperiores placeat quas omnis, sint ad commodi . . .
          </p>

          <div className="idea_card_tag_container">
            <div className="idea_tag">
              <p>Tag</p>
            </div>
            <div className="idea_tag">
              <p>Tag</p>
            </div>
            <div className="idea_tag">
              <p>Tag</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card_divider"></div>
    </>
  );
};

export default IdeaCard;
