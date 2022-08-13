import React, { useContext, useState } from "react";
import IdeaCard from "../IdeaCard";
import { ContextProvider } from "../../config/Context";
import CardLoading from "../loading/CardLoading";
import "../../css/SearchBar.css"
import { BiSearchAlt } from "react-icons/bi";
const AppSearch = () => {
  const loading = [1, 2, 3];
  const card = [1, 2, 3, 4, 5, 6, 7, 8];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;

  const [search,setSearch] = useState("")
  const handleInput = (e) =>{
    setSearch(e.target.value,);

  }
  console.log(search)
  return (
    <>
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Search Ideas..."
          onChange={handleInput}
          name="srh"
          value={search.srh}
        />
        <button className="searchbtn">
          <BiSearchAlt size="25" />
        </button>
      </div>
      {search
        ? loading.map((data, i) => <CardLoading key={i} />)
        : card.map((data, i) => <IdeaCard key={i} />)}
    </>
  );
};

export default AppSearch;
