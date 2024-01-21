
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/Homescreen";
import ContactPage from "./Pages/Home/Homescreen/ContactPage";
import Work from "./Pages/Home/Homescreen/Work";
import About from "./Pages/Home/Homescreen/About";
import Pikipiki from "./Pages/Home/Homescreen/Pikipiki.jsx";
import Potentiality from "./Pages/Home/Homescreen/Potentiality.jsx"

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/ContactPage" element={<ContactPage />}></Route>
              <Route path="/Work" element={<Work />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Pikipiki" element={<Pikipiki/>}></Route>
              <Route path="/Potentiality" element={<Potentiality/>}></Route>
              <Route path="" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;