


import { getQuestions } from "../../_actions/faqsAction";
import Faq from './faqs';
export const dynamic = "force-dynamic";
export const revalidate = 0;


export default async function QuestionServer() {
  
  const questionRes = await getQuestions();
  const questionsData = questionRes?.data || [];

  return <Faq questionsData={questionsData} />;
}
