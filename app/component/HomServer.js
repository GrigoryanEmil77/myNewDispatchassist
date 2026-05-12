
import { getHome } from '../../_actions/homeAction';
import { getVideo } from '../../_actions/videoAction';
import HomeData from './home';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomeServer() {
  
    const [homeRes, videoRes] = await Promise.all([
      getHome(),
      getVideo(),
    ]);

    const home = homeRes?.data || [];
    const video = videoRes?.data || [];

    return(
     <HomeData
     home={home}
     video={video} />
    )
}
