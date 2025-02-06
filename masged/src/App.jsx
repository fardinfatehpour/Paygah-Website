import React from "react";
//css
import './App.css'
//components
import Heder from './assets/components/Heder.jsx'
import Home from "./assets/components/Home.jsx";
// import Prayer from "./assets/components/prayer.jsx";
import Footer from "./assets/components/Footer.jsx";
//react-router-dom
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
      <div id="Heder">
        <Heder />
      </div>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      {/* <Prayer/> */}
    </>
  );
}

export default App;
