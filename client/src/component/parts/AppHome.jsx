import React, { useContext } from "react";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import { ContextProvider } from "../../config/Context";

const AppHome = () => {
  const loading = [1, 2, 3,4,5];
  const card = [1, 2, 3, 4, 5, 6, 7, 8];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;

  return (
    <>
      {load
        ? loading.map((data, i) => <CardLoading key={i} />)
        : card.map((data, i) => <IdeaCard key={i} />)}
      <div className="last_text_con">
        <p className="last_text">You have just reached to the end🙂</p>
      </div>
    </>
  );
};

export default AppHome;
