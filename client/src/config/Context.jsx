import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

//Making Instance
export const ContextProvider = createContext();
const Context = (props) => {
  //LoginModal State
  const [modal, setModal] = useState(false);

  //Post Modal state
  const [open, setOpen] = useState(false);

  //Card Loading
  const [isloading, setisLoading] = useState(true);

  //user state
  const [user, setUser] = useState([]);

  //My idea State
  const [myIdea, setMyIdea] = useState([]);

  //all idea
  const [allIdea, setallIdea] = useState([]);

  //stat
  const [stat, setStat] = useState();

  //topIdean
  const [top,setTop] = useState();

   const url = import.meta.env.VITE_API_URL;
   const token = Cookies.get("token");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${url}/api/idea`);
      if (res.status === 200) {
        setallIdea(res.data);
        setisLoading(false);
      }
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const getStat = async () => {
      try {
        const res = await axios.get(`${url}/api/stat`);
        setStat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStat();
  }, []);

  useEffect(() => {
   const getTop = async () =>{
    try {
      const res = await axios.get(`${url}/api/stat/top`)
      setTop(res.data)
    } catch (error) {
      console.log(error);
    }
   }
   getTop();
  }, [])
    
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await axios.get(`${url}/api/user/${token}`);
      setUser(userData.data);
      console.log("cookie data", userData.data);
    };
    if (token) {
      fetchUser();
    }
  }, []);
  return (
    <>
      <ContextProvider.Provider
        value={{
          mdl: [modal, setModal],
          opn: [open, setOpen],
          ld: [isloading, setisLoading],
          usr: [user, setUser],
          myid: [myIdea, setMyIdea],
          allid: [allIdea, setallIdea],
          st:[stat,setStat],
          tp:[top,setTop]
        }}
      >
        {props.children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
