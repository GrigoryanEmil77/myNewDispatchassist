export const dynamic = "force-dynamic";

import { getRequest } from '../../_actions/requestAction'; 
import RequestData from './request';


export default async function RequestServer() {
  const { data: request = [] } = await getRequest();

  return <RequestData request={request} />;
}
