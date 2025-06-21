"use client";
import React, { useEffect, useState } from 'react';
import { getTrucktype } from '@/_actions/truckAction';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './trucktype.css';
import AOS from "aos";
import "aos/dist/aos.css";

const TruckType = () => {
  const [truckTypes, setTruckTypes] = useState([]);
  const [readMoreStates, setReadMoreStates] = useState([]);

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
        const response = await getTrucktype();
        if (response.errMsg) {
          console.error(response.errMsg);
        } else {
          const data = response.truck || [];
          setTruckTypes(data);
          setReadMoreStates(new Array(6).fill(true)); // 6 truck types
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);
      }
    };
    fetchTruckTypes();
  }, []);

  const toggleReadMore = (index) => {
    setReadMoreStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  if (truckTypes.length === 0) return null;

  const {
    titleTruck = "",
    DryVan = "", DryVantext = "", DryVanpicture = "",
    Reefer = "", Reefertext = "", Reeferpicture = "",
    BoxTruck = "", BoxTrucktext = "", BoxTruckpicture = "",
    Flatbed = "", Flatbedtext = "", Flatbedpicture = "",
    StepDeck = "", StepDecktext = "", StepDeckpicture = "",
    PowerOnly = "", PowerOnlytext = "", PowerOnlypicture = "",
  } = truckTypes[0] || {};

  const trucks = [
    { title: DryVan, text: DryVantext, img: DryVanpicture },
    { title: Reefer, text: Reefertext, img: Reeferpicture },
    { title: BoxTruck, text: BoxTrucktext, img: BoxTruckpicture },
    { title: Flatbed, text: Flatbedtext, img: Flatbedpicture },
    { title: StepDeck, text: StepDecktext, img: StepDeckpicture },
    { title: PowerOnly, text: PowerOnlytext, img: PowerOnlypicture },
  ];

  return (
    <section className="full-width-section mt-5 elements">
      <div className="read-more-container elements">
        <h2 className="text trucks" data-aos="flip-up">{titleTruck}</h2>
        <div className="row mt-5 elements">
          {trucks.map(({ title, text, img }, index) => (
            <div className="col-md-4 mt-3 elements" key={index}>
              {img && (
                <img
                  src={img}
                  data-aos="fade-right"
                  width="200"
                  height="100"
                  className="truck"
                  alt={`truck${index}`}
                />
              )}
              <h3 className="mt-4" data-aos="fade-up">{title}</h3>
              <p>
                {readMoreStates[index] ? text.slice(0, 100) : text}
                {text.length > 100 && (
                  <span className="read-more-text">
                    {readMoreStates[index] ? `...` : ''}
                  </span>
                )}
              </p>
              {text.length > 100 && (
                <button
                  type="button"
                  data-aos="fade-up"
                  className="read-more-btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {readMoreStates[index] ? 'Read More' : 'Read Less'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruckType;
