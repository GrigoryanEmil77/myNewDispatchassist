"use client";

import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutData = ({ abouts = [] }) => {
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  const [number, setNumber] = useState({
    carriersnumber: 0,
    brokersnumber: 0,
    loadsnumber: 0,
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  useEffect(() => {
    if (!abouts.length) return;

    const aboutData = abouts[0];
    setNumber({
      carriersnumber: +aboutData.carriersnumber || 0,
      brokersnumber: +aboutData.brokersnumber || 0,
      loadsnumber: +aboutData.loadsnumber || 0,
    });
  }, [abouts]);

  const animateCounter = (element, target) => {
    let count = 0;
    const speed = target / 80;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        element.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = `${target}+`;
      }
    };

    updateCount();
  };

  useEffect(() => {
    if (hasAnimated.current) return;
    if (!number.carriersnumber && !number.brokersnumber && !number.loadsnumber) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          animateCounter(el, target);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    countersRef.current.forEach(el => el && observer.observe(el));
    hasAnimated.current = true;

    return () => observer.disconnect();
  }, [number]);

  const {
    titlefirst = "",
    titlesecond = "",
    text = "",
    carrierstext = "",
    brokerstext = "",
    loadstext = "",
  } = abouts[0] || {};

  return (
    <section className="container py-5" id="About Us">
      <div className="text-center mb-4">
        <h2 className="text elements" data-aos="fade-up">
          {titlefirst} <span>{titlesecond}</span>
        </h2>
        <p className="lead mt-3" data-aos="fade-up" style={{ minHeight: "80px" }}>
          {text}
        </p>
      </div>

      <div className="row justify-content-center mt-5 elements" style={{ marginLeft: "10px" }}>
        {[
          { label: carrierstext, value: number.carriersnumber },
          { label: brokerstext, value: number.brokersnumber },
          { label: loadstext, value: number.loadsnumber },
        ].map((item, index) => (
          <div key={index} className="col elements m mt-5">
            <div className="style_moving_info_center__yTejj" data-aos="fade-up">
              <div>
                <span
                  className="style_moving_info_number__vI2ou"
                  data-target={item.value}
                  ref={el => (countersRef.current[index] = el)}
                >
                  {item.value}
                </span>
              </div>
              <h4 className="style_moving_info_reason__IccwQ">{item.label}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutData;
