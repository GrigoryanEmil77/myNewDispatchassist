
import { getTrucktype } from '../../_actions/truckAction';
import TruckType from './trucktype';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TruckTypeServer() {
  
    const [truckTypeRes, ] = await Promise.all([
      getTrucktype(),
    ]);

    const truckTypes = truckTypeRes?.data || [];


    return(
     <TruckType
     truckTypes={truckTypes}
     />
    )
}
