"use client";
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './services.css';

const ServicesData =({ service = []}) => {
  
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  useEffect(() => {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', e => e.preventDefault());
    });
  }, []);

  const splitWithBreaks = (text = "") =>
    text.split(" || ").map((part, index, arr) => (
      <React.Fragment key={index}>
        {part}
        {index !== arr.length - 1 && <br />}
      </React.Fragment>
    ));

  
  const {
    titlefirst = "", titlesecond = "",
    LoadSearch = "", Booking = "", BrokerSetup = "", Detention = "",
    Invoicing = "", Factoring = "", Support = "",
    picture1 = "", picture2 = "", picture3 = "", picture4 = "",
    picture5 = "", picture6 = "", picture7 = ""
  } = service[0] || {};

  const serviceList = [
    { id: "LOAD SEARCH FTL/LTL", title: LoadSearch, img: picture1 },
    { id: "RATE NEGOTIATION & BOOKING", title: Booking, img: picture2, split: true },
    { id: "BROKER SETUP", title: BrokerSetup, img: picture3 },
    { id: "DETENTION LAYOVER TONU", title: Detention, img: picture4, split: true },
    { id: "INVOICING", title: Invoicing, img: picture5 },
    { id: "FACTORING & INSURANCE ASSISTANCE", title: Factoring, img: picture6, split: true },
    { id: "Support", title: Support, img: picture7 },
  ];

  return (
    <div className="container-fluid services elements mt-3">
      <h2 className="text text-center elements" data-aos="fade-up">
        {titlefirst} <span>{titlesecond}</span>
      </h2>

      <div className="row justify-content-center mt-5 elements">
        {serviceList.map(({ id, title, img, split }, index) => (
          <div key={index} className="col elements m">
            <div className="new text-center elements" id={id} data-aos="fade-right">
              {img && (
                <img
                  src={img}
                  className="provide"
                  alt={`pic${index + 1}`}
                  width="147px"
                  height="147px"
                />
              )}

              <div className="text-container">
                <p className="text text-nowrap">
                  {split ? splitWithBreaks(title) : title}
                </p>
              </div>

              <div className="workik">
                <p>
                  {split ? splitWithBreaks(title) : title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesData;