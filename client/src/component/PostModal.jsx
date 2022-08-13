import React, { useContext, useState } from "react";
import ModalContainer from "./ModalContainer";
import "../css/PostModal.css";
import { BiX } from "react-icons/bi";
import { ContextProvider } from "../config/Context";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostModal = () => {
  const { opn } = useContext(ContextProvider);
  const [open, setOpen] = opn;

  const [tags, setTags] = useState([]);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
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
          <input type="text" className="post_input" placeholder="Idea Title" />
          <textarea
            className="post_textarea"
            placeholder="Write Something..."
          />
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            inputFieldPosition="bottom"
            placeholder="Tags"
            autofocus={false}
            maxLength="10"
            allowDragDrop={false}
          />
          <button className="post_btn">Post</button>
        </div>
      </ModalContainer>
    </>
  );
};

export default PostModal;
