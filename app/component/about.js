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

  // useEffect(() => {
  //   if (!abouts.length) return;

  //   const aboutData = abouts[0];
  //   setNumber({
  //     carriersnumber: +aboutData.carriersnumber || 0,
  //     brokersnumber: +aboutData.brokersnumber || 0,
  //     loadsnumber: +aboutData.loadsnumber || 0,
  //   });
  // }, [abouts]);
  useEffect(() => {
  const aboutData = abouts.length ? abouts[0] : {};

  setNumber({
    carriersnumber: +aboutData.carriersnumber || 1000,
    brokersnumber: +aboutData.brokersnumber || 500,
    loadsnumber: +aboutData.loadsnumber || 1000,
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

  // useEffect(() => {
  //   if (hasAnimated.current) return;
  //   if (!number.carriersnumber && !number.brokersnumber && !number.loadsnumber) return;

  //   const observer = new IntersectionObserver((entries, obs) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         const el = entry.target;
  //         const target = parseInt(el.getAttribute("data-target"), 10);
  //         animateCounter(el, target);
  //         obs.unobserve(el);
  //       }
  //     });
  //   }, { threshold: 0.1 });

  //   countersRef.current.forEach(el => el && observer.observe(el));
  //   hasAnimated.current = true;

  //   return () => observer.disconnect();
  // }, [number]);
  useEffect(() => {
  if (!countersRef.current.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);

        animateCounter(el, target);

        obs.unobserve(el); 
      }
    });
  }, { threshold: 0.4 });

  countersRef.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const {
    titlefirst = "ABOUT",
    titlesecond = "US",
    text = "Dispatch Assist is a platform for truck drivers and companies! With our 24/7 service, we are clearly  committed to supporting owner-operators and businesses of all sizes. We focus on finding the best freight and possible high rates which will maximize earnings, especially in such a challenging industry. Plus, by taking care of paperwork and broker communications, we allow clients to focus on growing their business. Our emphasis on building long-term partnerships shows our true care about the success of our clients.",
    carrierstext = "Carriers",
    brokerstext = "Brokers",
    loadstext = "Loads Weekly",
  } = abouts[0] || {};

  return (
    <section className="container py-5" id="About Us">
      <div className="text-center mb-4">
        <h2 className="text elements" data-aos="flip-up">
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
                {/* <span
                  className="style_moving_info_number__vI2ou"
                  data-target={item.value}
                  ref={el => (countersRef.current[index] = el)}
                >
                  {item.value}
                </span> */}
                <span
  className="style_moving_info_number__vI2ou"
  data-target={item.value}
  ref={el => (countersRef.current[index] = el)}
>
  0
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
