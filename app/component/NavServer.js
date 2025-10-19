
export const dynamic = "force-dynamic"; 

import { getNavbarData } from "../../_actions/navbarAction";
import { getServicesType } from "../../_actions/servicesAction";
import { getTrucktype } from "../../_actions/truckAction";
import MyNavbar from "./navbar";

export default async function NavbarServer() {
  try {
    // Fetch all data simultaneously
    const [navbarsRes, serviceRes, truckTypeRes] = await Promise.all([
      getNavbarData(),
      getServicesType(),
      getTrucktype(),
    ]);

    const navbars = navbarsRes?.data || [];
    const service = serviceRes?.data || [];
    const truckTypes = truckTypeRes?.data || [];

    return (
      <MyNavbar
        navbars={navbars}
        service={service}
        truckTypes={truckTypes}
      />
    );
  } catch (error) {
    console.error("Error loading Navbar data:", error);
    return <div style={{ color: "red" }}>Failed to load navigation data</div>;
  }
}
