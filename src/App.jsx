import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import './utils/App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
function App() {
  return (
    <div className="App">
      <div>
        <div className="green-gradient"/>
        <NavBar />
        <Hero />

      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
