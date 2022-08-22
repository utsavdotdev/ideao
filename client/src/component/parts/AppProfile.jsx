import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../config/Context";
import "../../css/Profile.css";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const AppProfile = () => {
  const { usr } = useContext(ContextProvider);
  const [load, setLoad] = useState(true);
  const [myIdea, setMyIdea] = useState([]);
  const [user, setUser] = usr;
  const loading = [1, 2, 3, 4, 5];

  const token = Cookies.get("token");
  if (!token) {
    toast.info("Please, Login to access", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <Navigate to="/app" />;
  }

  const url = import.meta.env.VITE_API_URL;
  const userId = user[0]?.id;

  useEffect(() => {
    fetchMyIdea();
  }, []);

  const fetchMyIdea = async () => {
    const myIdeaRes = await axios.get(`${url}/api/idea/${userId}`);
    if (myIdeaRes.status === 201) {
      setMyIdea(myIdeaRes.data);
      setLoad(!load);
    }
    if (myIdeaRes.status === 202) {
      setLoad(!load);
      setMyIdea("NoResult");
    }
  };

  console.log(myIdea);

  // const card = [
  //   {
  //     idea_id: "asnmkjsy8eb7et37ewb7e37",
  //     idea_postedBy: "Utsav Bhattarai",
  //     idea_doc: "March 25,2022",
  //     idea_title: "This is title",
  //     idea_userImg:
  //       "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
  //     idea_des:
  //       "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
  //     idea_tag: ["Web", "App", "Web3"],
  //   },
  //   {
  //     idea_id: "asnmkjsy8eb7et37ewb7e37",
  //     idea_postedBy: "Utsav Bhattarai",
  //     idea_doc: "March 25,2022",
  //     idea_title: "This is title",
  //     idea_userImg:
  //       "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
  //     idea_des:
  //       "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodiplaceat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
  //     idea_tag: ["Web", "App", "Web3"],
  //   },
  //   {
  //     idea_id: "asnmkjsy8eb7et37ewb7e37",
  //     idea_postedBy: "Utsav Bhattarai",
  //     idea_doc: "March 25,2022",
  //     idea_title: "This is title",
  //     idea_userImg:
  //       "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
  //     idea_des:
  //       "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
  //     idea_tag: ["Web", "App", "Web3"],
  //   },
  // ];
  return (
    <>
      <div className="profile_con">
        <div className="profile_wrapper ">
          <img src={user[0]?.user_pic} className="profile_img" />
          <div className="profile_details">
            <p>{user[0]?.user_name}</p>
            <p>{user[0]?.user_email}</p>
          </div>
        </div>
      </div>
      <div className="myidea_con">
        <div className="myidea_title">
          <p>My Ideas</p>
          <p>Total Idea : {myIdea === "NoResult" ? 0 : myIdea.length}</p>
        </div>
      </div>
      {load ? (
        loading.map((i) => <CardLoading key={i} />)
      ) : myIdea === "NoResult" ? (
        <div className="myidea_noIdea">No Idea posted yet😥</div>
      ) : (
        myIdea.map((data, i) => <IdeaCard key={i} data={data} />)
      )}
    </>
  );
};

export default AppProfile;
