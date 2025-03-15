"use client";
import React, { useEffect, useState } from 'react';
import { getTruckStop } from '@/_actions/truckStopAction';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './truckStop.css'

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
  <div className="itemLeft item1"> <img src={picture1||null} alt="Logo 1" className="logo-img" style={{height:"85px",}}/></div>
  <div className="itemLeft item2"> <img src={picture2||null} alt="Logo 1" className="logo-img" style={{height:"80px",}}/></div>
  <div className="itemLeft item3">  <img src={picture3||null} alt="Logo 3" className="logo-img" style={{height:"60px",}}/></div>
  <div className="itemLeft item4"><img src={picture4||null} alt="Logo 4" className="logo-img" style={{height:"80px",}}/></div>
  <div className="itemLeft item5"> <img src={picture5||null} alt="Logo 5" className="logo-img" style={{height:"60px",}}/></div>
  <div className="itemLeft item6"><img src={picture6||null} alt="Logo 6" className="logo-img" style={{height:"60px",}}/></div>
  <div className="itemLeft item7"> <img src={picture7||null} alt="Logo 7" className="logo-img" style={{height:"80px",}}/></div>
  <div className="itemLeft item8">    <img src={picture8||null} alt="Logo 8" className="logo-img" style={{height:"80px",}}/></div>
  <div className="itemLeft item9">  <img src={picture9||null} alt="Logo 9" className="logo-img" style={{height:"60px",}}/></div>
  <div className="itemLeft item10"> <img src={picture10||null} alt="Logo 10" className="logo-img" style={{height:"80px",}}/></div>
</div>
</div>


  );
};

export default TruckStopData;

