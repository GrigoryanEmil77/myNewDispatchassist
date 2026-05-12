

import { getPosts } from "../../_actions/postAction";
import AboutData from "./about";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AboutServer() {
  const { data: abouts } = await getPosts();

  return <AboutData abouts={abouts} />;
}
