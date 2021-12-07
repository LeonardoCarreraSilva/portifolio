import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Navigator from "../header/header"
import Home from "../home/home";

function App() {
  return (
    <BrowserRouter>
     <Navigator />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
