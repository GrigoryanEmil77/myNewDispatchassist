
import { getRequest } from '../../_actions/requestAction'; 
import RequestData from './request';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function RequestServer() {
  const { data: request = [] } = await getRequest();

  return <RequestData request={request} />;
}
