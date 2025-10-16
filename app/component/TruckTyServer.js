// export const dynamic = "force-dynamic"; 


// import { getTrucktype } from '@/_actions/truckAction';
// import TruckType from './trucktype';

// export default async function TruckTypeServer() {
  
//     const [truckTypeRes, ] = await Promise.all([
//       getTrucktype(),
//     ]);

//     const truckTypes = truckTypeRes?.data || [];


//     return(
//      <TruckType
//      truckTypes={truckTypes}
//      />
//     )
// }



import { getTrucktype } from '../../_actions/truckAction';
import TruckType from './trucktype';

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
