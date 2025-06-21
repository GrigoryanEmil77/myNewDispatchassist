"use client";
import React, { useEffect, useState } from 'react';
import { getServicesType } from '@/_actions/servicesAction';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './services.css'



const ServicesData = () => {

    const [service,setService] = useState([])
   
    useEffect(() => {
      AOS.init({ once: true, duration: 1200 });
    
      return () => {
        AOS.refreshHard(); 
      };
    }, []);
    

      useEffect(() => {
        document.querySelectorAll('img').forEach(img => {
          img.addEventListener('contextmenu', event => event.preventDefault());
        });
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
 
const {titlefirst="",titlesecond="",LoadSearch="", Booking="", BrokerSetup="", Detention="",Invoicing="",Factoring="",Support="",
picture1="", picture2="", picture3="", picture4="",picture5="",picture6="",picture7="",}=
      service.length > 0 ? service[0] : {};

    
      
  return (
  
   
<div className="container-fluid services elements mt-3" >
<h2 className="text  text-center elements" data-aos="flip-up"> {titlefirst} <span> {titlesecond} </span> </h2>
  <div className="row justify-content-center mt-5  elements" >
      <div className="col elements  m" id="new">
          <div className="new text-center elements" id="LOAD SEARCH FTL/LTL"  data-aos="fade-right">
   {picture1 && (
  <img 
    src={picture1} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
    width= "147px"
    height= "147px"

  />
)}
                     
              <div className="text-container">
                <p className="text" >{LoadSearch}</p>
               
            </div>
            <div className="workik" >
              <p >{LoadSearch}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="RATE NEGOTIATION & BOOKING" data-aos="fade-right">
      {picture2 && (
  <img 
    src={picture2} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)} 
              <div className="text-container" >
                <p className="text-nowrap">
                {Booking.split(" ||").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Booking.split(" ||").length - 1 && <br />}
      </React.Fragment>
    ))}
                </p>
            </div>
            <div className="workik" >
              <p  >{Booking.split(" || ").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Booking.split("||").length - 1 && <br />}
      </React.Fragment>
    ))} </p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="BROKER SETUP" data-aos="fade-right">
     {picture3 && (
  <img 
    src={picture3} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)} 
              <div className="text-container">
                <p className="text">{BrokerSetup}</p>
            </div>
            <div className="workik" >
              <p >{BrokerSetup}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="DETENTION LAYOVER TONU" data-aos="fade-right">
         {picture4 && (
  <img 
    src={picture4} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)} 
              <div className="text-container">
                <p className="text-nowrap">
                {Detention.split(" || ").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Detention.split(" || ").length - 1 && <br />}
      </React.Fragment>
    ))}
                </p>
            </div>
            <div className="workik" >
              <p >
              {Detention.split(" || ").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Detention.split(" || ").length - 1 && <br />}
      </React.Fragment>
    ))}
              </p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements"  id="INVOICING" data-aos="fade-right">
     {picture5 && (
  <img 
    src={picture5} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)}  
                      <div className="text-container">
                <p className="text">{Invoicing}</p>
            </div>
            <div className="workik" >
              <p>{Invoicing}</p>
            </div>
          </div>
      </div>
      <div className="col elements m" >
        <div className="new text-center elements" id="FACTORING & INSURANCE ASSISTANCE" data-aos="fade-right">
        {picture6 && (
  <img 
    src={picture6} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)}
              <div className="text-container">
           <p className="text-nowrap">
    {Factoring.split(" || ").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Factoring.split("||").length - 1 && <br />}
      </React.Fragment>
    ))}
  </p>
            </div>
            <div className="workik" >
              <p>{Factoring.split(" || ").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== Factoring.split(" || ").length - 1 && <br />}
      </React.Fragment>
    ))}
  </p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="Support"  data-aos="fade-right">
         {picture7 && (
  <img 
    src={picture7} 
    data-aos="fade-right" 
    className="provide" 
    alt="pic7" 
 width= "147px"
    height= "147px"
  />
)}        
              <div className="text-container">
                <p className="text">{Support}</p>
            </div>
            <div className="workik" >
              <p >{Support}</p>
            </div>
          </div>
      </div>
  </div>
</div>

  );
};

export default ServicesData;
