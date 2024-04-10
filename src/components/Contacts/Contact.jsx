import React from "react";
import "./Contact.css";
import { IoMdCall } from "react-icons/io";

import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We alwayes ready to help by providing the best service for you. We
            bleive a good place to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <IoMdCall size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">+31 612 134 156</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>

            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">+31 612 134 156</span>
                </div>
              </div>
              <div className="flexCenter button">Chat Now</div>
            </div>
            </div>

            <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <IoVideocam size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Video Call</span>
                  <span className="secondaryText">+31 612 134 156</span>
                </div>
              </div>
              <div className="flexCenter button">Video Call Now</div>
            </div>
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">+31 612 134 156</span>
                </div>
              </div>
              <div className="flexCenter button">Message Now</div>
            </div>
            </div>



          </div>
        </div>
        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
