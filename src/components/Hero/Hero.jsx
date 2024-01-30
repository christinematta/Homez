import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
            <div className="orange-circle"></div>
          </div>

          <div className="flexColStart hero-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--primary)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>

          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.jpg" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
