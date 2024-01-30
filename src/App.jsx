import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import './utils/App.css'
import Companies from "./components/Companies/Companies";
function App() {
  return (
    <div className="App">
      <div>
        <div className="green-gradient"/>
        <NavBar />
        <Hero />

      </div>
      <Companies/>
    </div>
  );
}

export default App;
