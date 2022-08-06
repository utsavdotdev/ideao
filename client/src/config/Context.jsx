import React, { createContext, useState } from "react";

//Making Instance
export const ContextProvider = createContext();
const Context = (props) => {

  //Modal State
  const [modal, setModal] = useState(false);
  return (
    <>
      <ContextProvider.Provider
        value={{
          mdl: [modal, setModal],
        }}
      >
        {props.children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
