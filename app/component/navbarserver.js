// import { getNavbarData } from "@/_actions/navbarAction";
// import { getServicesType } from "@/_actions/servicesAction";
// import { getTrucktype } from "@/_actions/truckAction";
// import MyNavbar from "./navbar";

// export default async function NavbarServer() {
//   const [navbarsRes, serviceRes, truckTypesRes] = await Promise.all([
//     getNavbarData(),
//     getServicesType(),
//     getTrucktype(),
//   ]);

//   const navbars = navbarsRes?.data || [];
//   const service = serviceRes?.data || [];
//   const truckTy = truckTypesRes?.data || [];

//   return (
//     <MyNavbar
//       navbars={navbars}
//       service={service}
//       truckTy={truckTy}
//     />
//   );
// }

import { getContact } from "@/_actions/footherAction";
import { getServicesType } from "@/_actions/servicesAction";
import { getTrucktype } from "@/_actions/truckAction";
import { getNavbarData } from "@/_actions/navbarAction";
import { getFollow } from "@/_actions/followAction";
import MyNavbar from "./navbar";

export default async function NavbarServer() {
  
const [ serviceRes, truckTypesRes, navbarsRes,] = await Promise.all([
     
  getServicesType(),  
  getTrucktype(),     
  getNavbarData(),    
  
]);



  const navbars = navbarsRes?.data || [];
  const service = serviceRes?.data || [];
  const truckTypes = truckTypesRes?.data || [];

    return(
     <MyNavbar
    
     service={service}
     truckTypes={truckTypes}
     navbars={navbars}
   />
    )
}
