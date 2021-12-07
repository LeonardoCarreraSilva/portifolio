import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Navigator from "../header/header"
import Home from "../home/home";
import Sobre from "../sobre";

function App() {
  return (
    <BrowserRouter>
     <Navigator />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
