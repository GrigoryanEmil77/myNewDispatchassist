import "./page.css";
import NavbarServer from "./component/NavServer";
import HomeServer from "./component/HomServer";
import AboutServer from "./component/AboServer";
import ServicesServer from "./component/ServServer";
import TruckStopServer from "./component/TruckSServer";
import TruckTypeServer from "./component/TruckTyServer";
import CustomerServer from "./component/CustomServer";
import QuestionServer from "./component/FaqServer";
import RequestServer from "./component/ReqServer";
import FootherServer from "./component/FootServer";
import MyNavbar from "./component/navbar";

export default function Home() {
  return (
    <div className="next"> 
      <NavbarServer />
      <HomeServer />
      <AboutServer />
      <ServicesServer />
      <TruckTypeServer />
      <QuestionServer />
      <CustomerServer />
      <RequestServer />
      <TruckStopServer />
      <FootherServer />
    </div>
  );
}
