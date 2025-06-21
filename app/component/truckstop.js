"use client";
import React, { useEffect, useState } from 'react';
import { getTruckStop } from '@/_actions/truckStopAction';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './truckstop.css'

const TruckStopData = () => {
    const [truckstop,setTruckStop] = useState([])
 
    useEffect(() => {
        const fetchTruckTypes = async () => {
          try {
       
            const response = await getTruckStop();
            if (response.errMsg) {
              setErrMsg(response.errMsg);
            } else {
              setTruckStop(response.data);
            }
          } catch (error) {
            console.error("Error fetching truck types:", error);
   
          }
        
        };
    
        fetchTruckTypes();
      }, []);

  
      const {picture1="",picture2="",picture3="",picture4="",picture5="",picture6="",picture7="",picture8="",picture9="",picture10="", }=
      truckstop.length > 0 ? truckstop[0] : {};

     
      
  return (
   <div className="container text-center mt-5">
  <div className="wrapper">
    {[picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10].map((pic, idx) => (
      pic && (
        <div key={idx} className={`itemLeft item${idx + 1}`}>
          <img
            src={pic}
            alt={`Logo ${idx + 1}`}
            className="logo-img"
             width="95"
            height="75" 
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    ))}
  </div>
</div>

  );
};

export default TruckStopData;

