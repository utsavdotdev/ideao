import React, { useContext } from "react";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import { ContextProvider } from "../../config/Context";

const AppHome = () => {
  const loading = [1, 2, 3,4,5];
  const card = [
    {
      idea_id:"asnmkjsy8eb7et37ewb7e37",
      idea_postedBy:"Utsav Bhattarai",
      idea_doc:"March 25,2022",
      idea_title:"This is title",
      idea_userImg:"https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:"lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag:[
        "Web",
        "App",
        "Web3"
      ]
    },
    {
      idea_id:"asnmkjsy8eb7et37ewb7e37",
      idea_postedBy:"Utsav Bhattarai",
      idea_doc:"March 25,2022",
      idea_title:"This is title",
      idea_userImg:"https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:"lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodiplaceat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag:[
        "Web",
        "App",
        "Web3"
      ]
    },
    {
      idea_id:"asnmkjsy8eb7et37ewb7e37",
      idea_postedBy:"Utsav Bhattarai",
      idea_doc:"March 25,2022",
      idea_title:"This is title",
      idea_userImg:"https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:"lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag:[
        "Web",
        "App",
        "Web3"
      ]
    }
  ];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;

  return (
    <>
      {load
        ? loading.map((i) => <CardLoading key={i} />)
        : card.map((data, i) => <IdeaCard key={i} data={data} />)}
      <div className="last_text_con">
        <p className="last_text">You have just reached to the end🙂</p>
      </div>
    </>
  );
};

export default AppHome;
