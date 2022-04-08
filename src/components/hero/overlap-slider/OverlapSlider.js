import React from "react";
import './Overlapslider.css'

const OverlapSlider = () => {
  return (
    <div className="overlap-slider">
      <div className="overlap-slider-container">
        <div className="foreground overlap-slider-item">
          <img src="/assets/images/" alt="" />
        </div>
        <div className="middle overlap-slider-item">
          <img src="/assets/images/" alt="" />
        </div>
        <div className="background overlap-slider-item">
          <img src="/assets/images/" alt="" />
        </div>
        <div className="slide-btn">
           <img src="/assets/icons/chevron-left-brown.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OverlapSlider;
