import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import CarouselEffect from "./components/Carousel/CarouselEffect";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CarouselEffect />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
