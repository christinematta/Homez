import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexEnd r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
export default function Residencies() {
  return (
    <section className="paddings innerWidth r-wrapper">
      <div className="r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper
          {...sliderSettings}
          speed={700}
          loop={true}
          cssMode={true}
          keyboard={true}
          mousewheel={true}
        >
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />
                <span className="secondaryText">
                  <span style={{ color: "orange" }}>€ </span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
