export const dynamic = "force-dynamic";

import { getTruckStop } from '../../_actions/truckStopAction';
import TruckStopClient from './truckstop'

export default async function TruckStopServer() {
  
    const [truckStopRes, ] = await Promise.all([
      getTruckStop(),
    ]);

    const truckstop = truckStopRes?.data || [];


    return(
     <TruckStopClient
     truckstop={truckstop}
     />
    )
}
