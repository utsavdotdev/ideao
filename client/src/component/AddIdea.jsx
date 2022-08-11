import React,{useContext} from "react";
import "../css/AddIdea.css"
import {BsPlusLg} from "react-icons/bs"
import PostModal from "./PostModal";
import { ContextProvider } from "../config/Context";

const AddIdea = () => {
  const { opn } = useContext(ContextProvider);
  const [open,setOpen] = opn;

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
