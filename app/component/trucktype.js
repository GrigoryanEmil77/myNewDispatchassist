import { getTrucktype } from "@/_actions/truckAction";

export default async function TruckType() {
  const { data, errMsg } = await getTrucktype();

  if(errMsg) 
    return <h1>{errMsg}</h1>

  return (
    <main>
      {
        data.map(item => (
          <h1 key={item._id}>{item.DryVan}</h1>
        ))
      }
    </main>
  );
}