
import { getServicesType } from '../../_actions/servicesAction';
import ServicesData from './services';
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
