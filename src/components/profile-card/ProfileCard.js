import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="wavy-yellow">
        <img src="/assets/images/wavy-yellow-bg.png" alt="" />
      </div>
      <div className="profile">
        <div className="profile-info">
          <div>
              <img src="/assets/images/profile-pic.svg" alt="" />
          </div>
          <div>
              <p>Wanda</p>
              <p>@wandada</p>
          </div>
        </div>
        <div className="profile-items">
          <div>
            <img src="/assets/images/wavy-bright-color.svg" alt="" />
          </div>
          <div>
            <img src="/assets/images/wavy-black.svg" alt="" />
          </div>
          <div>
            <img src="/assets/images/wavy-gray.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
