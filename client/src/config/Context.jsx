import React, { createContext, useState } from "react";

//Making Instance
export const ContextProvider = createContext();
const Context = (props) => {

  //LoginModal State
  const [modal, setModal] = useState(false);

  //Post Modal state
  const [open,setOpen] = useState(false);

  //Card Loading
  const [load,setLoad] = useState(false);

  return (
    <>
      <ContextProvider.Provider
        value={{
          mdl: [modal, setModal],
          opn: [open,setOpen],
          ld:[load,setLoad]
        }}
      >
        {props.children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
