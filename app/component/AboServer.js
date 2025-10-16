// export const dynamic = "force-dynamic"; 


// import { getPosts } from '@/_actions/postAction';
// import AboutData from './about';


// export default async function AboutServer() {
  
//     const [aboutRes, ] = await Promise.all([
//       getPosts(),
      
//     ]);

//     const abouts = aboutRes?.data || [];


//     return(
//      <AboutData
//      abouts={abouts}
//     />
//     )
// }

import { getPosts } from '../../_actions/postAction'; 
import AboutData from './about';


export default async function AboutServer() {
  const { data: abouts } = await getPosts();
  return <AboutData abouts={abouts} />;
}
