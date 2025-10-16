// export const dynamic = "force-dynamic"; 


// import { getRequest } from '@/_actions/requestAction';
// import RequestData from './request';


// export default async function RequestServer() {
  
//     const [requestRes] = await Promise.all([
//       getRequest(),
      
//     ]);

//     const request = requestRes?.data || [];


//     return( 
//      <RequestData
//       request={request}
//     />
//     )
// }
import { getRequest } from '../../_actions/requestAction'; // հարաբերական import
import RequestData from './request';

export const dynamic = "force-dynamic";

export default async function RequestServer() {
  const { data: request = [] } = await getRequest();

  return <RequestData request={request} />;
}
