import React, { useState } from "react";
import "./NavBar.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function getMenuStyles() {
    if (document.documentElement.clientWidth <= 875) {
      return {
        right: !menuOpen && "-100%",
      };
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./Homez.png" alt="logo" width={200} />
        <OutsideClickHandler  onOutsideClick={() => setMenuOpen(false)}>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button>
            <a href="">Contact</a>
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} color={"rgba(75, 207, 141, 1)"} />
        </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
}
