import React from "react";
import "../css/AddIdea.css"
import {BsPlusLg} from "react-icons/bs"
import { useState } from "react";
import PostModal from "./PostModal";

const AddIdea = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    {open && <PostModal/>}
      <div className="add_btn" onClick={() =>setOpen(!open)}>
        <BsPlusLg size={"20"}/>
      </div>
    </>
  );
};

export default AddIdea;
