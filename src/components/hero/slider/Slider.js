import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "/assets/images/hero-img.png",
  "/assets/images/hero-img1.png",
  "/assets/images/hero-img2.png",
  "/assets/images/hero-img3.png",
];

const properties = {
  autoplay: false,
  prevArrow: (
    <div
      style={{
        width: "30px",
        marginRight: "-30px",
        left: "30px",
        position: "relative",
      }}
    >
      <svg
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.4805" cy="25" r="25" fill="black" fill-opacity="0.26" />
        <path
          d="M30.4805 15L20.4805 24.6429L30.4805 34.6429"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-60px" }}>
      <svg
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25.623"
          cy="25"
          r="25"
          transform="rotate(-180 25.623 25)"
          fill="black"
          fill-opacity="0.26"
        />
        <path
          d="M20.623 35L30.623 25.3571L20.623 15.3571"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  ),
};

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <div>
              <span className="hero-text-title">Welcome to ARTSPLIT</span>
              <p className="hero-text-body">
                We are building a diverse community of African art collectors,
                connected by a shared mission to promote African art on a global
                scale, making it easy for you to buy, own and invest in
                prestigious African art. Learn More
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <div>
              <span className="hero-text-title">
                ARTSPLIT is Launching Soon!!!
              </span>
              <p className="hero-text-body">
                Join our community of art lovers today! Sign up now to get an
                exclusive preview of our debut catalogue of upcoming auctions,
                where you can be the first to buy and trade splits. Sign Up Now!
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <div>
              <span className="hero-text-title">Our Artist</span>
              <p className="hero-text-body">
                With access to ARTSPLIT’s curated portfolio of works by iconic
                African artists, our community of collectors will benefit from
                the flexibility of either co-ownership or full ownership, and
                physical custodianship of our artworks for a defined period View
                Artist Portfolio
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            <div>
              <span className="hero-text-title">How Does ARTSPLIT Work?</span>
              <p className="hero-text-body">
                As an ART trading company, our aim is to create accessibility to
                prestigious African art by blending digital technology, online
                and offline engagement to build an all-inclusive creative
                economy Learn How ARTSPLIT Works
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
