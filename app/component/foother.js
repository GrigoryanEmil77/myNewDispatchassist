"use client";
import React, { useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./foother.css";
import AOS from "aos";
import "aos/dist/aos.css";


const FootherData = ({contact=[],service=[],truckTypes=[], navbars=[],follow=[]}) => {

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
    return () => AOS.refreshHard();
  }, []);

  const {
    title = "",
    phone = "",
    gmail = "",
    location = "",
    picture = "",
    locationFlorida = "",
  } = contact[0] || {};

  const {
    titleServices = "",
    LoadSearch = "",
    Booking = "",
    BrokerSetup = "",
    Detention = "",
    Invoicing = "",
    Factoring = "",
    Support = "",
  } = service[0] || {};

  const {
    DryVan = "",
    Reefer = "",
    BoxTruck = "",
    Flatbed = "",
    StepDeck = "",
    PowerOnly = "",
  } = truckTypes[0] || {};

  const { followtitle = "", facelink = "", instagramlink = "", linkedlink = "" } =
    follow[0] || {};

  const { trucktypes = "" } = navbars[0] || {};

  return (
    <footer className="text-white mt-7 pb-6 w-100 elements">
      <div className="container text-md-left elements">
     
        <div className="row mb-3 mt-5">
          {picture && (
            <img
              src={picture}
              alt="Brand Logo"
              id="brandLogo"
              className="brand-logo"
              width="160"
              style={{ WebkitUserDrag: "none", userSelect: "none" }}
            />
          )}
        </div>
        <div className="row text-md-left" id="Contact">

          <div className="col-12 col-md mt-5" data-aos="fade-up">
            <h5 className="text-uppercase mb-4">{title}</h5>
            <p>
              <a href={`mailto:${gmail}`} className="social-icon text-white">
                <i className="bi bi-envelope fa-2x email-icon me-2" />
                {gmail}
              </a>
            </p>
            <p>
              <a href={`tel:${phone}`} className="social-icon text-white">
                <i className="bi bi-telephone fa-2x phone-icon me-2" />
                {phone}
              </a>
            </p>
            <p>
              <a
                href={locationFlorida}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-white"
              >
                <i className="bi bi-geo-alt fa-2x location-icon me-2" />
                {location}
              </a>
            </p>
          </div>

     
        <div className="col-12 col-md mt-5 element elements" data-aos="fade-up">
          <h5 className="text-uppercase mb-4 font-weight-bold mx-2">{followtitle}</h5>
          <div className="d-flex justify-content-md-start flex-wrap element elements">
           <a
              href={facelink}
              className="social-icon text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              >
              <i className="bi bi-facebook mr-1 fa-2x facebook-icon"></i>
               </a>

            <a
              href={instagramlink}
              className="social-icon text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <i className="bi bi-instagram mr-1 fa-2x facebook-icon"></i>
            </a>
            <a
              href={linkedlink}
              className="social-icon text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Linkedin page"
            >
              <i className="bi bi-linkedin mr-7 fa-2x facebook-icon"></i>
            </a>
          </div>
        </div>
  
  
        <div className="col-12 col-md mt-5 element elements" data-aos="fade-up">
          <h5 className="text-uppercase mb-4 font-weight-bold">{trucktypes}</h5>
          <div>
            <a href="#DRY VAN" className="text-white scroll-link">
              {DryVan}
            </a>
          </div>
          <div>
            <a href="#REEFER" className="text-white scroll-link">
              {Reefer}
            </a>
          </div>
          <div>
            <a href="#BOX TRUCK" className="text-white scroll-link">
              {BoxTruck}
            </a>
          </div>
          <div>
            <a href="#FLATBED" className="text-white scroll-link">
              {Flatbed}
            </a>
          </div>
          <div>
            <a href="#STEP DECK" className="text-white scroll-link">
              {StepDeck}
            </a>
          </div>
          <div>
            <a href="#POWER ONLY" className="text-white scroll-link">
              {PowerOnly}
            </a>
          </div>
        </div>
          <div className="col-12 col-md mt-5" data-aos="fade-up">
            <h5 className="text-uppercase mb-4">{titleServices}</h5>
            {[LoadSearch, Booking, BrokerSetup, Detention, Invoicing, Factoring, Support].map(
              (item, i) => (
                <div key={i} className="text-white">
                  {item.replaceAll(" || ", " ")}
                </div>
              )
            )}
          </div>
        </div>

   
        <hr className="my-4" />
        <div className="text-center">
          <p>© Dispatch Assist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FootherData;
