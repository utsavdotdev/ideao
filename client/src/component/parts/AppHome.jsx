import React, { useContext } from "react";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import { useState } from "react";
import axios from "axios";
import { ContextProvider } from "../../config/Context";

const AppHome = () => {
  const url = import.meta.env.VITE_API_URL;
  const { allid, ld } = useContext(ContextProvider);

  const [allIdea, setallIdea] = allid;
  const loading = [1, 2, 3, 4, 5];
  const [isloading, setisLoading] = ld;

  return (
    <>
      {isloading
        ? loading.map((i) => <CardLoading key={i} />)
        : allIdea.length !== 0
        ? // myIdea.map((data, i) => <IdeaCard key={i} data={data} />)
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
