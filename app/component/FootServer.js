
import FootherData from "./foother";
import { getContact } from "../../_actions/footherAction";
import { getServicesType } from "../../_actions/servicesAction";
import { getTrucktype } from "../../_actions/truckAction";
import { getNavbarData } from "../../_actions/navbarAction";
import { getFollow } from "../../_actions/followAction";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function FootherServer() {
  const [contactRes, serviceRes, truckTypesRes, navbarsRes, followRes] = await Promise.all([
    getContact(),
    getServicesType(),
    getTrucktype(),
    getNavbarData(),
    getFollow(),
  ]);

  const contact = contactRes?.data || [];
  const service = serviceRes?.data || [];
  const truckTypes = truckTypesRes?.data || [];
  const navbars = navbarsRes?.data || [];
  const follow = followRes?.data || [];

  return (
    <FootherData
      contact={contact}
      service={service}
      truckTypes={truckTypes}
      navbars={navbars}
      follow={follow}
    />
  );
}
