"use client"
import "./page.css"
import AboutData from "./component/about";
import Faq from "./component/faqs";
import NavbarComponent from "./component/navbar";
import ServicesData from "./component/services";
import TruckType from "./component/trucktype";
import RequestData from "./component/request";
import TruckStopData from "./component/truckstop";
import FootherData from "./component/foother";
import HomeData from "./component/home";
import CustomerData from "./component/customer";

export default function Home() {

  return (
    <div className="next">   
      <NavbarComponent />
      <HomeData />
      <AboutData />
      <ServicesData />
      <TruckType />
      <Faq />
      <CustomerData />
      <RequestData />
      <TruckStopData />
      <FootherData />
    </div>
  );
}
