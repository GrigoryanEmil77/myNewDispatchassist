import { getNavbarData } from "@/_actions/navbarAction";

import MyNavbar from "./navbar";

export default async function NavbarServer() {
  
const [ navbarsRes,] = await Promise.all([
   
  getNavbarData(),    
  
]);



  const navbars = navbarsRes?.data || [];


    return(
     <MyNavbar
    

     navbars={navbars}
   />
    )
}
