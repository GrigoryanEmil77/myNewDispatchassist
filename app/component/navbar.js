import { getNavbarData } from "@/_actions/navbarAction";

export default async function Navbar() {
  const { data, errMsg } = await getNavbarData();

  if(errMsg) 
    return <h1>{errMsg}</h1>

  return (
    <main>
      {
        data.map(item => (
          <h1 key={item._id}>{item.home}</h1>
        ))
      }
    </main>
  );
}