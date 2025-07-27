export const dynamic = "force-dynamic"; 

import { getCustomer } from '@/_actions/customerAction';
import CustomerData from './customer';

export default async function CustomerServer() {
  
    const [customerRes, ] = await Promise.all([
      getCustomer(),
    ,
    ]);

    const customer = customerRes?.data || [];
  

    return(
     <CustomerData
     customer={customer}
      />
    )
}
