import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import DashboardApp from "./pages/DashboardApp"
import Explore from "./pages/Explore"
import Search from "./pages/Search"
import Myidea from "./pages/Myidea"
import "./css/global.css"
function App() {

  return (
   <>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/app" element={<DashboardApp/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/myidea" element={<Myidea/>}/>
     </Routes>
   </>
  )
}

export default App
