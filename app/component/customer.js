"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./customer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerData = ({ customer = [] }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({ once: true, duration: 1200 });
  }, []);

 const data = customer.length ? truckstop[0] : {};
 
  const {
    titlefirst = "CUSTOMER",
    titlesecond = "REVIEWS",
    customer1name = "Darrell Johnson",
    customer2name = "Paula Feaster",
    customer3name = "Victoria Oguagha",
    customer1text = "I just wanted to share a quick note and let you guys know that you are doing a really good job. I'm glad I decided to work with you. It's really great how easy your dispatch service is. I never have any problems at all. Keep up the great work!dispatch service is. I never have any problems at all. Keep up the great work!",
    customer2text = "After just one month as a client, I was completely impressed by the speed of communication and the new level of rate negotiations. The team is constantly open to my feedback and not only listens to what I have to say, but also expands the capabilities of my company.",
    customer3text = "Working with Dispatch Assist is a real pleasure. We were  impressed with such attention to detail, communication skills and professional approach to our deadlines and the company. They were very helpful with our shipping and always went the extra mile for us when it came to the final stages of loading. We highly recommend working with them!",
    customer1picture = "/IMG_20240707_194308.jpg",
    customer2picture = "/IMG_20240707_193014.jpg",
    customer3picture = "/IMG_20240707_194308.jpg",
  } =customer.length >0 ? customer[0] : {};

  const reviews = [
    { name: customer1name, text: customer1text, picture: customer1picture },
    { name: customer2name, text: customer2text, picture: customer2picture },
    { name: customer3name, text: customer3text, picture: customer3picture },
  ];

   return (
    <div className="container elements mt-3" id="Customer">
      <h2 className="text-center elements mt-5" data-aos="flip-up">
        {titlefirst} <span>{titlesecond}</span>
      </h2>

  
      <div className="row custom mt-5 elements">
        {reviews.map((review, index) => (
          <div
            className="col-md-4 elements"
            key={index}
            data-aos="fade-right"
          >
            <div className="card-body review-card-body">
              <img
                src={review.picture || null}
                alt={`Customer ${index + 1}`}
                className="review-image"
                style={{
                  WebkitUserDrag: "none",
                  userDrag: "none",
                  userSelect: "none",
                }}
              />
              <p className="customer-name">{review.name}</p>
              <div className="stars">★★★★★</div>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Layout */}
      <div className="container mt-5">
        <div
          id="exampleCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
                data-aos="fade-right"
              >
                <div className="card-body review-card-body text-center">
                  <img
                    src={review.picture || null}
                    alt={`Customer ${index + 1}`}
                    className="review-image"
                    style={{
                      WebkitUserDrag: "none",
                      userDrag: "none",
                      userSelect: "none",
                    }}
                  />
                  <p className="customer-name">{review.name}</p>
                  <div className="stars">★★★★★</div>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#exampleCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#exampleCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
