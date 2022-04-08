import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div className="cta-bg">
      <div className="cta-body">
        <div className="cta-img">
          <img src="/assets/images/two-iphones.png" alt="" />
        </div>
        <div className="cta-text">
          <span>Download and Trade the Most Profitable Artworks</span>
          <div className="cta-btns">
            <span>
              <img src="/assets/icons/btn-ios.svg" alt=""/>
            </span>
            <span>
              <img src="/assets/icons/btn-android.svg" alt=""/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
