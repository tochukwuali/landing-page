import React, { useState } from "react";
import "./Features.css";

const Features = () => {
  const [step, setStep] = useState(1);
  const styleb = {
    borderBottom: "5px solid #be7136",
    color: "#be7136",
  };

 
  return (
    <section className="features">
      <div className="features-tab">
        <span>APP FEATURES</span>
        <h5 className="features-text-title">
          Innovative hosting platform built team empowerment
        </h5>
        <div className="feature-tab-item">
          <p style={step === 1 ? styleb : null} onClick={() => setStep(1)}>Image Rights</p>
          <p style={step === 2 ? styleb : null} onClick={() => setStep(2)}> Leave Asset</p>
          <p style={step === 3 ? styleb : null} onClick={() => setStep(3)}> Split Asset</p>
        </div>
        {step === 1 && (
          <p className="features-text-body">
            Block storage is an approach to data storage in which each storage
            volume acts an individual hard drive the configured by the storage
            administrator. In the block storage model is data is saved to the
            storage media in fixed-sized blocks. Block storage is an approach to
            data storage in which each storage volume acts an individual hard
            drive the configured by the storage administrator. In the block
            storage model is data is saved.
          </p>
        )}
        {step === 2 && (
          <p className="features-text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure
            asperiores hic nam sit ratione eligendi commodi perferendis nihil et
            impedit, quaerat, perspiciatis, similique accusantium facere?
            Incidunt labore dignissimos qui?Block storage is an approach to data
            storage in which each storage volume acts an individual hard drive
            the configured by the storage administrator. In the block storage
            model is data is saved.
          </p>
        )}

        {step === 3 && (
          <p className="features-text-body">
            Incidunt labore dignissimos qui?Block storage is an approach to data
            storage in which each storage volume acts an individual hard drive
            the configured by the storage administrator. In the block storage
            model is data is saved.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure
            asperiores hic nam sit ratione eligendi commodi perferendis nihil et
            impedit, quaerat, perspiciatis, similique accusantium facere?
            
          </p>
        )}
      </div>
      <div>
        <img src="/assets/images/features-iphone.png" alt=""/>
      </div>
    </section>
  );
};

export default Features;
