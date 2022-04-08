import React from "react";
import "./Logo.css";

const logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="artsplt logo" />
      </div>
      <div className="logo-title">
        <img src="/assets/images/logo-title.png" alt="artsplt logo-title" />
      </div>
    </div>
  );
};

export default logo;
