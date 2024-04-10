import React from "react";
import './GetStarted.css'
export default function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homez</span>
          <span className="secondaryText">
            Subscribe and find super attractive price qoutes from us <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:christine.onsi@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}
