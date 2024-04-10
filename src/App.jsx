import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import "./utils/App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contacts/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="green-gradient" />
        <NavBar />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;
