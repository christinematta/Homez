import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerwidth flexCenter f-container ">
        <div className="flexColStart f-left">
          <img src="./Homez.png" alt="logo" />
          <span className="flexColStart ">
            Our vision is to provide all people <br />
            the best place to live.
          </span>
        </div>

        <div className="flexColStrat f-right ">
        <div className="green-gradient" />
          <p className="primaryText ">Information</p>
          <p>Dam 1, 1012Js Amsterdam </p>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>


        </div>
      </div>
    </section>
  );
}
