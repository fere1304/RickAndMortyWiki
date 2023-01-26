import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css";
//import { useCharacters, useLocations } from "./api/useData";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/location" element={<Location />} />
        
      </Routes>
    </Router>
  );
}
const Home = ()=>{
  return (
    <div className="App">Buna ziua</div>
  )

}

export default App;
