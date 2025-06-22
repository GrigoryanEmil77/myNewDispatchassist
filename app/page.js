import "./page.css"

import NavbarServer from "./component/NavbarServer";
import HomeServer from "./component/homeServer";
import AboutServer from "./component/aboutServer";
import ServicesServer from "./component/servicesServer";
import TruckStopServer from "./component/truckStopServer";
import TruckTypeServer from "./component/trucktypeServer";
import CustomerServer from "./component/customerServer";
import QuestionServer from "./component/faqsServer";
import RequestServer from "./component/requestServer";
import FootherServer from "./component/footherServer";

export default function Home() {

  return (
    <div className="next"> 
      <NavbarServer />
      <HomeServer/>
      <AboutServer />
      <ServicesServer />
      <TruckTypeServer />
      <QuestionServer/>
      <CustomerServer />
      <RequestServer />
      <TruckStopServer />
      <FootherServer />
    </div>
  );
}
