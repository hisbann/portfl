import React from "react";
import About from "./components/About";
import ButtonRefresh from "./components/ButtonRefresh";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      {/* <Home/> 
      <About  />
      <Services />
      <ButtonRefresh /> */}
    </div>
  );
}

export default App;
