import React from 'react'
import "./App.css";
import About from "./Components/About";
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/About" element={ <About/> } />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
