import React, { useContext } from "react";
import { ContextProvider } from "../../config/Context";
import "../../css/Profile.css";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";

const AppProfile = () => {
  const loading = [1, 2, 3, 4, 5];
  const card = [
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodiplaceat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
  ];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;
  return (
    <>
      <div className="profile_con">
        <div className="profile_wrapper">
          <img
            src="https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46"
            className="profile_img"
          />
          <div className="profile_details">
            <p>Utsav Bhattarai</p>
            <p>stu@utsavbhattarai.info.np</p>
          </div>
        </div>
      </div>
      <div className="myidea_con">
        <div className="myidea_title">
          <p>My Ideas</p>
          <p>Total Idea : 3</p>
        </div>
      </div>
      {load
        ? loading.map((i) => <CardLoading key={i} />)
        : card.map((data, i) => <IdeaCard key={i} data={data} />)}
    </>
  );
};

export default AppProfile;
