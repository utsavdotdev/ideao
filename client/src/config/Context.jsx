      import React, { createContext, useEffect, useState } from "react";
      import Cookies  from "js-cookie";
      import axios from "axios";

      //Making Instance
      export const ContextProvider = createContext();
      const Context = (props) => {
        //LoginModal State
        const [modal, setModal] = useState(false);

        //Post Modal state
        const [open, setOpen] = useState(false);

        //Card Loading
        const [load, setLoad] = useState(false);

        //user state
        const [user, setUser] = useState([]);

        const url = import.meta.env.VITE_API_URL;
        const token = Cookies.get("token")
        useEffect(() => {
          const fetchUser = async() =>{
            const userData = await axios.get(`${url}/api/user/${token}`)
            setUser(userData.data);
            console.log("cookie data",userData.data);
          }
          if(token){
            fetchUser();
          }
        }, [])
        return (
          <>
            <ContextProvider.Provider
              value={{
                mdl: [modal, setModal],
                opn: [open, setOpen],
                ld: [load, setLoad],
                usr: [user, setUser],
              }}
            >
              {props.children}
            </ContextProvider.Provider>
          </>
        );
      };

      export default Context;
