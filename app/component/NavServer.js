
// export const dynamic = "force-dynamic"; 

// import { getNavbarData } from "../../_actions/navbarAction";
// import { getServicesType } from "../../_actions/servicesAction";
// import { getTrucktype } from "../../_actions/truckAction";
// import MyNavbar from "./navbar";

// export default async function NavbarServer() {
//   try {
//     // Fetch all data simultaneously
//     const [navbarsRes, serviceRes, truckTypeRes] = await Promise.all([
//       getNavbarData(),
//       getServicesType(),
//       getTrucktype(),
//     ]);

//     const navbars = navbarsRes?.data || [];
//     const service = serviceRes?.data || [];
//     const truckTypes = truckTypeRes?.data || [];

//     return (
//       <MyNavbar
//         navbars={navbars}
//         service={service}
//         truckTypes={truckTypes}
//       />
//     );
//   } catch (error) {
//     console.error("Error loading Navbar data:", error);
//     return <div style={{ color: "red" }}>Failed to load navigation data</div>;
//   }
// }

// 🧠 Disable all caching on Vercel & Next.js
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { headers } from "next/headers";
import { getNavbarData } from "../../_actions/navbarAction";
import { getServicesType } from "../../_actions/servicesAction";
import { getTrucktype } from "../../_actions/truckAction";
import MyNavbar from "./navbar";

export default async function NavbarServer() {
  try {
    // 🔁 This forces Next.js to treat every request as dynamic (no cache)
    headers();

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
        navbars={JSON.parse(JSON.stringify(navbars))}
        service={JSON.parse(JSON.stringify(service))}
        truckTypes={JSON.parse(JSON.stringify(truckTypes))}
      />
    );
  } catch (error) {
    console.error(" Error loading Navbar data:", error);
    return (
      <div style={{ color: "red", padding: "1rem" }}>
        ⚠️ Failed to load navigation data
      </div>
    );
  }
}
