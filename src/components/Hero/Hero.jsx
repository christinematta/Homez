import './Hero.css'
export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">Left Hero
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.jpg" alt="hero-image"  />
          </div>


        </div>
      </div>
    </section>
  );
}
