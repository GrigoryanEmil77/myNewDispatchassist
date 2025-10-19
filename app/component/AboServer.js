

// import { getPosts } from '../../_actions/postAction'; 
// import AboutData from './about';


// export default async function AboutServer() {
//   const { data: abouts } = await getPosts();
//   return <AboutData abouts={abouts} />;
// }

import { getPosts } from "../../_actions/postAction";
import AboutData from "./about";

export default async function AboutServer() {
  const { data: abouts } = await getPosts();

  return <AboutData abouts={abouts} />;
}
