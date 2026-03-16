import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/Bali.png",
  "/Lebanon.png",
  "/Maldives.png",
  "/Germany.png",
  "/Paris.png",
  "/Spain.png"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(function () {
    const interval = setInterval(function () {
      setCurrentImage(function (prev) {
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, 4000); // change image every 4 seconds
    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Find Your Next Adventure</h1>
          <p>Discover amazing destinations and book your perfect trip today.</p>

        </div>
      </div>

    </section>



  );
}
export default Hero;
