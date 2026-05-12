

import { headers } from "next/headers";
import { getNavbarData } from "../../_actions/navbarAction";
import { getServicesType } from "../../_actions/servicesAction";
import { getTrucktype } from "../../_actions/truckAction";
import MyNavbar from "./navbar";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function NavbarServer() {
  try {
 
    headers();


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
        navbars={JSON.parse(JSON.stringify(navbars))}
        service={JSON.parse(JSON.stringify(service))}
        truckTypes={JSON.parse(JSON.stringify(truckTypes))}
      />
    );
  } catch (error) {
    console.error(" Error loading Navbar data:", error);
    return (
      <div style={{ color: "red", padding: "1rem" }}>
         Failed to load navigation data
      </div>
    );
  }
}
