import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../config/Context";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import "../../css/Profile.css";

const AppProfile = () => {
  const { usr, myid } = useContext(ContextProvider);

  const [user, setUser] = usr;
  const [load, setLoad] = useState(true);
  const [myIdea, setMyIdea] = myid;
  const loading = [1, 2, 3, 4, 5];

  const token = Cookies.get("token");
  if (!token) {
    toast.info("Please, Login to access");
    return <Navigate to="/app" />;
  }

   const url = import.meta.env.VITE_API_URL;
  const userId = user[0]?.user_gid;

  //Fetching user idea
  useEffect(() => {
    if (userId) {
      fetchMyIdea();
    }
  }, [userId]);

  const fetchMyIdea = async () => {
    const res = await axios.get(`${url}/api/idea/${userId}`);
    setLoad(!load);
    if (res.status === 200) {
      console.log(res.data);
      setMyIdea(res.data);
    }
    if (res.status === 400) {
      toast.error("Something went wrong!");
    }
  };

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
          <p>
            Total Idea : {myIdea.response === "No Result" ? 0 : myIdea.length}
          </p>
        </div>
      </div>

      {load ? (
        loading.map((i) => <CardLoading key={i} />)
      ) : myIdea.length !== 0 ? (
        myIdea.map((data, i) => <IdeaCard key={i} data={data} />)
      ) : (
        <div className="myidea_noIdea">No Idea posted yet😥</div>
      )}
    </>
  );
};

export default AppProfile;
