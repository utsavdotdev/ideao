import React, { useContext } from "react";
import { ContextProvider } from "../../config/Context";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";

const AppExplore = () => {
  const loading = [1, 2, 3, 4, 5];

  const { ld, allid } = useContext(ContextProvider);
  const [isloading, setisLoading] = ld;

  const [allIdea, setallIdea] = allid;
  return (
    <>
      <div className="top_text_con">
        <p>New🔥</p>
      </div>
      {isloading
        ? loading.map((data, i) => <CardLoading key={i} />)
        : allIdea.map((data, i) => <IdeaCard key={i} data={data} />)}
      <div className="last_text_con">
        <p className="last_text">You have just reached to the end🙂</p>
      </div>
    </>
  );
};

export default AppExplore;
