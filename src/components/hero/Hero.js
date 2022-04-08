import React, { useState } from "react";
import Features from "../features/Features";

import "./Hero.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../profile-card/ProfileCard";
import Slideshow from "./slider/Slider";
import OverlapSlider from "./overlap-slider/OverlapSlider";

const sliderSettings = {
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  
  infinite: false,
};

const Hero = () => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <>
      <main>
        <div className="hero">
          <Slideshow />
        </div>

        <section className="new-dimension-wrapper">
          <div className="new-dimension">
            <div className="new-dimension-img-slide">
              <OverlapSlider />
            </div>
            <div className="new-dimension-text">
              <h5>Experience Art in a whole new dimension</h5>
              <p>
                ARTSPLIT’s fusion of digital and traditional platforms gives
                members of our community access to the ARTSPLIT App (Mobile ad
                Web), and personalised engagement for our private collector’s
                ARTSPLIT’s fusion of digital and traditional platforms gives
                members of our community.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </section>

        <Features />
      </main>
      <section className="getting-started-wrapper">
        <div className="getting-started">
          <div>
            <img src="/assets/images/getting-started-iphone.png" alt="" />
          </div>
          <div className="getting-started-text">
            <h5 className="getting-started-title">
              Steps to getting started on the Artsplit App
            </h5>
            <div className="features-text-body">
              <div className="features-body-list-item">
                <span>
                  <img src="/assets/icons/wallet.svg" alt="" />
                </span>
                <div className="features-body-list-item-text">
                  <h5>Sign Up</h5>
                  <p>
                    One you’ve set up your wallet of choice, connect it to
                    wallet
                  </p>
                </div>
              </div>
              <div className="features-body-list-item">
                <span>
                  <img src="/assets/icons/2-user.svg" alt="" />
                </span>
                <div className="features-body-list-item-text">
                  <h5>Explore Amazing Arts</h5>
                  <p>
                    One you’ve set up your wallet of choice, connect it to
                    wallet
                  </p>
                </div>
              </div>
              <div className="features-body-list-item">
                <span>
                  <img src="/assets/icons/Star.svg" alt="" />
                </span>
                <div className="features-body-list-item-text">
                  <h5>Trade and Earn</h5>
                  <p>
                    One you’ve set up your wallet of choice, connect it to
                    wallet
                  </p>
                </div>
              </div>
              <div className="features-cta">
                <span>
                  <img src="/assets/icons/btn-ios.svg" alt="" />
                </span>
                <span>
                  <img src="/assets/icons/btn-android.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creators">
        <div className="creators-text">
          <h3>Our Popular Creators!</h3>
          <p>
            ARTSPLIT’s commitment in raising the profile of African art is
            demonstrated by our growing collection of works from prestigious
            African artists, whose works transcend global art trends,
            positioning African art as a strong driver of the global art
            economy.
          </p>
          <div className="controls">
            <div onClick={sliderRef?.slickPrev} style={{ color: "black" }}>
              <img src="/assets/icons/arrow-left.svg" alt="" />
            </div>

            <div onClick={sliderRef?.slickNext}>
              <img src="/assets/icons/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="creators-card">
          <Slider ref={setSliderRef} {...sliderSettings}>
            
              <ProfileCard />
         
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            

           
              <ProfileCard />
            
            {/* <div style={{ position: "relative" }}>
              <img
                className={`tns-lazy-img`}
                src="/assets/images/fox.png"
                alt=""
                style={imgStyles}
              />
            </div>
            <div style={{ position: "relative" }}>
              <img
                className={`tns-lazy-img`}
                src="/assets/images/fox.png"
                alt=""
                style={imgStyles}
              />
            </div> */}
          </Slider>
        </div>
      </section>
      <section className="join-community">
        <div>
          <img src="/assets/images/join-community.png" alt="join-community" />
        </div>
      </section>
    </>
  );
};

export default Hero;
