export const dynamic = "force-dynamic"; 


import { getNavbarData } from "@/_actions/navbarAction";
import { getServicesType } from "@/_actions/servicesAction";
import { getTrucktype } from "@/_actions/truckAction";
import MyNavbar from "./navbar";

export default async function NavbarServer() {
  const [navbarsRes,serviceRes,truckTypeRes] = await Promise.all([
    getNavbarData(),
    getServicesType(),
    getTrucktype(),
  ]);

  const navbars = navbarsRes?.data || [];
  const service = serviceRes?.data || [];
  const truckTypes = truckTypeRes?.data || [];

  return( 
  <MyNavbar
   navbars={navbars}
   service={service}
   truckTypes={truckTypes}
   />
  )
}
