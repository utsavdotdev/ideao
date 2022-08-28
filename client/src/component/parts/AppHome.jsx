import React, { useContext } from "react";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import { ContextProvider } from "../../config/Context";

const AppHome = () => {
  const { allid, ld } = useContext(ContextProvider);

  const [allIdea, setallIdea] = allid;
  const loading = [1, 2, 3, 4, 5];
  const [isloading, setisLoading] = ld;

  return (
    <>
      {isloading
        ? loading.map((i) => <CardLoading key={i} />)
        : allIdea.length !== 0
        ? 
          allIdea
            .sort(() => Math.random() - 0.5)
            .map((data, i) => <IdeaCard key={i} data={data} />)
        : null}

      <div className="last_text_con">
        <p className="last_text">You have just reached to the end🙂</p>
      </div>
    </>
  );
};

export default AppHome;
