import { getRequest } from '@/_actions/requestAction';
import RequestData from './request';


export default async function RequestServer() {
  
    const [requestRes] = await Promise.all([
      getRequest(),
      
    ]);

    const request = requestRes?.data || [];


    return( 
     <RequestData
      request={request}
    />
    )
}
