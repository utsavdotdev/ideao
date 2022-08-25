import React, { useContext, useState } from "react";
import "../css/IdeaCard.css";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ContextProvider } from "../config/Context";
const IdeaCard = ({ data }) => {
  const { myid } = useContext(ContextProvider);
  const [myIdea, setMyIdea] = myid;
  const {
    id,
    idea_postedBy,
    idea_doc,
    idea_title,
    idea_des,
    idea_tag,
    idea_userImg,
  } = data;
  const [more, setMore] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const url = import.meta.env.VITE_API_URL;

  const deleteIdea = async () => {
    const dltRes = await axios.delete(`${url}/api/idea/${id}`);
    const newId = id;
    if (dltRes.status === 201) {
      toast.success("Successfully Deleted the Idea");
      setMyIdea((prev) => {
        return prev.filter((data) => {
          return data.id != newId;
        });
      });
    }
    if (dltRes.status === 400) {
      toast.error("Something went wrong");
    }
  };
  console.log(myIdea);
  return (
    <>
      <div className="idea_card_container">
        <div className="idea_card_name_container">
          <div className="idea_card_name_cover">
            <img
              src={idea_userImg}
              className="idea_card_pp_image"
              alt="Profile pic"
            />
            <div className="idea_card_name_wrapper">
              <p className="idea_card_name">{idea_postedBy}</p>
              <p className="idea_card_date">{idea_doc}</p>
            </div>
          </div>
          {path === "/profile" && (
            <div className="idea_card_dlt" onClick={() => deleteIdea()}>
              <MdDeleteOutline size={20} />
            </div>
          )}
        </div>
        <div className="idea_card_des_container">
          <p className="idea_card_title">{idea_title}</p>
          <p className="idea_card_des">
            {more ? (
              <>
                {idea_des + " "}
                <button onClick={() => setMore(!more)} className="more_less">
                  Read Less
                </button>
              </>
            ) : (
              <>
                {idea_des?.substring(0, 100)}
                <button onClick={() => setMore(!more)} className="more_less">
                  Read More
                </button>
              </>
            )}
          </p>
          {idea_tag.length === 0 ? null : (
            <div className="idea_card_tag_container">
              {idea_tag?.map((data, i) => (
                <div className="idea_tag" key={i}>
                  <p>{data}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="card_divider"></div>
    </>
  );
};

export default IdeaCard;
