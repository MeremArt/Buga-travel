import React, { useEffect, useState } from "react";
import "./Carousel.style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vet from "./images/Steering.svg";
import Track from "./images/Trips.svg";
import Eme from "./images/Eme.svg";
import Matched from "./images/Matched.svg";
const Carousel = () => {
  var [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = 890;

      if (width >= breakpoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile?1.6:2.8,
    slidesToScroll: 1,
    responsive: [
      // Responsive settings...
    ],
  };

  return (
    <section className="banner-container">
      <Slider {...settings}>
        <div className="individual-slides">
          <img src={Track} className="Svg" />
          <br />
          <h2 className="slide-text">"Real-time tracking"</h2>
        </div>
        <div className="individual-slides">
          <img src={Vet} className="Svg" />
          <br />
          <h2 className="slide-text">“Vetted Drivers"</h2>
        </div>
        <div className="individual-slides">
          <img src={Eme} className="Svg" />
          <br />
          <h2 className="slide-text">"Emergency Feature"</h2>
        </div>
        <div className="individual-slides">
          <img src={Matched} className="Svg" />
          <br />
          <h2 className="slide-text">“Get Matched"</h2>
        </div>
       
      </Slider>
    </section>
  );
};

export default Carousel;
