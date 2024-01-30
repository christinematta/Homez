import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import './utils/App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
