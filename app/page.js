import { getPosts } from "@/_actions/postAction";
import Navbar from "./component/navbar";
import TruckType from "./component/trucktype";

export default async function Home() {
  const { data, errMsg } = await getPosts();

  if(errMsg) 
    return <h1>{errMsg}</h1>

  return (
    <main>
      {
        data.map(item => (
          <h1 key={item._id}>{item.text}</h1>
        ))
      }
      <Navbar/>
      <TruckType/>
    </main>
  );
}
