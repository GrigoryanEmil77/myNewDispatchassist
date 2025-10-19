

"use server";

import { getQuestions } from "../../_actions/faqsAction";
import Faq from './faqs';



export default async function QuestionServer() {
  const questionRes = await getQuestions();
  const questionsData = questionRes?.data || [];

  return <Faq questionsData={questionsData} />;
}
