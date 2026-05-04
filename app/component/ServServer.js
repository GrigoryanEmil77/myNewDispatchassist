export const dynamic = "force-dynamic";

import { getServicesType } from '../../_actions/servicesAction';
import ServicesData from './services';


export default async function ServicesServer() {
  
    const [servicesRes] = await Promise.all([
      getServicesType(),
      
    ]);

    const service = servicesRes?.data || [];


    return( 
     <ServicesData
      service={service}
    />
    )
}
