import React, { useEffect, useState } from "react";
import IdeaCard from "../IdeaCard";
import CardLoading from "../loading/CardLoading";
import "../../css/SearchBar.css";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
const AppSearch = () => {
  const load = [1, 2, 3];
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setloading] = useState(false);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const url = import.meta.env.VITE_API_URL;

  const onSearch = async () => {
    setloading(true);
    const res = await axios.get(`${url}/api/idea/search/${search}`);
    if (res.status === 200) {
      setResult(res.data);
      setloading(false);
    }
    if (res.status === 204) {
      toast.info("Nop, Idea doesn't found😥")
      setloading(false);
    }
  };
  useEffect(() => {
    if (!search) {
      setResult([]);
    }
  }, [search]);
  console.log(result);
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
          autocomplete="off"
        />
        <button className="searchbtn">
          <BiSearchAlt size="25" onClick={() => onSearch()} />
        </button>
      </div>
      {loading ? (
        load.map((i) => <CardLoading key={i} />)
      ) : result.length !== 0 ? (
        result.map((data, i) => <IdeaCard key={i} data={data} />)
      ) : (
        <div className="search_wrapper">
          <p className="search_text">
            {search ? "Typing . . .  " : "Start Searching . . . "}
          </p>
        </div>
      )}
    </>
  );
};

export default AppSearch;
