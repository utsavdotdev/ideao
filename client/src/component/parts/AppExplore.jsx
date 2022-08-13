import React, { useContext } from "react";
import { ContextProvider } from "../../config/Context";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";

const AppExplore = () => {
  const loading = [1, 2, 3, 4, 5];
  const card = [1, 2, 3, 4, 5, 6, 7, 8];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;
  return (
    <>
      <div className="top_text_con">
        <p>Trending🔥</p>
      </div>
      {load
        ? loading.map((data, i) => <CardLoading key={i} />)
        : card.map((data, i) => <IdeaCard key={i} />)}
      <div className="last_text_con">
        <p className="last_text">You have just reached to the end🙂</p>
      </div>
    </>
  );
};

export default AppExplore;
