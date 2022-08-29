import React, { useContext, useState } from "react";
import ModalContainer from "./ModalContainer";
import "../css/PostModal.css";
import { BiX } from "react-icons/bi";
import { ContextProvider } from "../config/Context";
import { WithContext as ReactTags } from "react-tag-input";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostModal = () => {
  const { opn, usr } = useContext(ContextProvider);
  const [open, setOpen] = opn;
  const [user, setUser] = usr;
  const [tags, setTags] = useState([]);
  const [load, setLoad] = useState(false);
  const [idea, setIdea] = useState({
    idea_title: "",
    idea_des: "",
  });
  const { idea_title, idea_des } = idea;
  const token = Cookies.get("token");
  if (!token) {
    toast.info("Login to post the Idea");
    return setOpen(!open);
  }
  const handleChange = (e) => {
    setIdea({
      ...idea,
      [e.target.name]: e.target.value,
    });
  };

  const finalTag = tags.map(function (obj) {
    return obj.text;
  });

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const url = "https://ideao-backend.herokuapp.com";
  const sendIdea = async () => {
    if (idea_title === "" || idea_des == "") {
      return toast.info("Field cannot be empty");
    }
    if (idea_des.length < 50) {
      return toast.info("Description must be long");
    }
    setLoad(true);
    const res = await axios.post(
      `${url}/api/idea`,
      {
        idea_title: idea_title,
        idea_des: idea_des,
        idea_doc: moment().format("ll"),
        user_id: user[0]?.user_gid,
        idea_userImg: user[0]?.user_pic,
        idea_postedBy: user[0]?.user_name,
        idea_tag: finalTag,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res) {
      toast.success("Successfully Posted", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIdea({
        idea_title: "",
        idea_des: "",
      });
      setLoad(false);
      setTags([]);
      setOpen(!open);
      window.location.reload();
    }
  };

  return (
    <>
      <ModalContainer style={{ width: "min(400px,80%)", height: "auto" }}>
        <div className="post_top">
          <p className="post_title">Create new Idea</p>
          <div className="post_cross" onClick={() => setOpen(!open)}>
            <BiX size="22" />
          </div>
        </div>
        <div className="post_input_container">
          <input
            type="text"
            className="post_input"
            placeholder="Idea Title"
            name="idea_title"
            onChange={handleChange}
            value={idea.idea_title}
            autocomplete="off"
          />
          <textarea
            className="post_textarea"
            placeholder="Write Something..."
            name="idea_des"
            onChange={handleChange}
            value={idea.idea_des}
          />
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            inputFieldPosition="bottom"
            placeholder="Tags"
            autofocus={false}
            maxLength={10}
            allowDragDrop={false}
          />
          <button className="post_btn" onClick={sendIdea}>
            {load ? <div className="lds-dual-ring"></div> : <p>Post</p>}
          </button>
        </div>
      </ModalContainer>
    </>
  );
};

export default PostModal;
