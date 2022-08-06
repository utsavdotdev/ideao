import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import "./css/global.css"
function App() {

  return (
   <>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
     </Routes>
   </>
  )
}

export default App
