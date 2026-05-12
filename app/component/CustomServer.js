
import { getCustomer } from "../../_actions/customerAction";
import CustomerData from "./customer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CustomerServer() {
  const customerRes = await getCustomer();
  const customer = customerRes?.data || [];

  return <CustomerData customer={customer} />;
}
