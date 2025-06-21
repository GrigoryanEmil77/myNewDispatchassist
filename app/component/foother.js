"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './foother.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { getContact } from '@/_actions/footherAction';
import { getServicesType } from '@/_actions/servicesAction';
import { getTrucktype } from '@/_actions/truckAction';
import { getNavbarData } from '@/_actions/navbarAction';
import { getFollow } from '@/_actions/followAction';

const FootherData = () => {

  const [navbars, setNavbars] = useState([]);
  const [service,setService] = useState([])
  const [contact,setContact]= useState([])
  const [truckTypes,setTruckTypes]= useState([])
  const [follow,setFollows]= useState([])

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  
    return () => {
      AOS.refreshHard(); 
    };
  }, []);
  

  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
  
        const response = await getServicesType();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setService(response.services);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);
       
      }
   
    };

    fetchTruckTypes();
  }, []);
  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
     
        const response = await getContact();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setContact(response.data);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);
       
      }
     
    };

    fetchTruckTypes();
  }, []);
  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
     
        const response = await getTrucktype();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setTruckTypes(response.truck);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);

      }
  
    };

    fetchTruckTypes();
  }, []);
  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
  
        const response = await getNavbarData();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setNavbars(response.data);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);

      }
     
    };

    fetchTruckTypes();
  }, []);
  
  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
        const response = await getFollow();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setFollows(response.data);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);

      }
   
    };

    fetchTruckTypes();
  }, []);



  const { title = "", phone = "", gmail = "", location = "", picture = "", locationFlorida = "" } =
    contact.length > 0 ? contact[0] : {};
  const { titleServices = "", LoadSearch = "", Booking = "", BrokerSetup = "", Detention = "", Invoicing = "", Factoring = "", Support = "" } =
    service.length > 0 ? service[0] : {};
  const { DryVan = "", Reefer = "", BoxTruck = "", Flatbed = "", StepDeck = "", PowerOnly = "" } =
    truckTypes.length > 0 ? truckTypes[0] : {};
  const { followtitle = "", facelink = "", instagramlink = "", linkedlink = "" } =
    follow.length > 0 ? follow[0] : {};
    const {trucktypes="",} =
     navbars.length > 0 ? navbars[0] : {};

  return (
    <footer className="text-white mt-7 pb-6 w-100 elements">
    <div className="container text-md-left elements">
      <div className="row mb-3 mt-5 elements">
        <div className="mt-5 elements">
      {picture && (
  <img 
    src={picture} 
            alt=''
            id="brandLogo"
            className="brand-logo"
            width="160" height="auto"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
          />)}  
        </div>
      </div>
  
      <div className="row text-md-left elements" id="Contact">
        <div className="col-12 col-md mt-5 element elements" data-aos="fade-up">
          <h5 className="text-uppercase mb-4 font-weight-bold">{title}</h5>
          <p>
            <a href="mailto:dispatchassistinc@gmail.com" className="social-icon text-white">
              <i className="bi bi-envelope mr-2 fa-2x email-icon"></i>
              {gmail}
              
            </a>
          </p>
          <p>
            <a href={`tel:${phone}`} className="social-icon text-white">
              <i className="bi bi-telephone mr-1 fa-2x phone-icon"></i>
              {phone}
            </a>
          </p>
          <p>
            <a
              href={locationFlorida}
              className="social-icon text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-geo-alt fa-2x location-icon"></i>
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
  
        <div className="col-12 col-md mt-5 element elements" data-aos="fade-up">
          <h5 className="text-uppercase mb-4 font-weight-bold">{titleServices}</h5>
          <div className="text-white">{LoadSearch}</div>
          <div className="text-white">{Booking.split(" || ").join(" ")}</div>
          <div className="text-white">{BrokerSetup}</div>
          <div className="text-white">{Detention.split(" || ").join(" ")}</div>
          <div className="text-white">{Invoicing}</div>
          <div className="text-white"> {Factoring.split(" || ").join(" ")}</div>
          <div className="text-white">{Support}</div>
        </div>
      </div>
  
      <hr className="mb-"></hr>
      <div className="row align-items-center element elements">
        <div className="col-md-12 element">
          <p className="text-center">© Dispatch Assist. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
)}  
export default FootherData;
