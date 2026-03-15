"use client";
import React, { useState, useEffect } from "react";
import "./faqs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = ({questionsData = []}) => {
  const [activeFAQs, setActiveFAQs] = useState({});

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
    return () => AOS.refreshHard();
  }, []);

  const {
    titlefirst = "",
    titlesecond = "",
    questions1 = "",
    questions2 = "",
    questions3 = "",
    questions4 = "",
    questions5 = "",
    answer1 = "",
    answer2 = "",
    answer3 = "",
    answer4 = "",
    answer5 = "",
  } = questionsData[0];

  const faqs = [
    { id: "faq1", question: questions1, answer: answer1 },
    { id: "faq2", question: questions2, answer: answer2 },
    { id: "faq3", question: questions3, answer: answer3 },
    { id: "faq4", question: questions4, answer: answer4 },
    { id: "faq5", question: questions5, answer: answer5 },
  ];

  const toggleFAQ = (id) => {
    setActiveFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container elements mt-5" id="FAQ">
      <h2 className="text-center mb-4 elements" data-aos="fade-up">
        {titlefirst} <span>{titlesecond}</span>
      </h2>
      <div className="w-layout-grid faq_list">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="faq_accordion" data-aos="fade-right">
            <div className="faq_question" onClick={() => toggleFAQ(id)} role="button" tabIndex={0} onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleFAQ(id);
            }}>
              <div className="text-size-medium-4 text-weight-bold">{question}</div>
              <div className="faq4_icon">
                <i className={`bi ${activeFAQs[id] ? "bi-dash" : "bi-plus"}`} />
              </div>
            </div>

            {activeFAQs[id] && (
              <div className="faq4_answer">
      
<p
  className="faq-answer-txt"
  dangerouslySetInnerHTML={{
    __html: answer.replace(/(\d)/g, "$1\u200B")
  }}
/>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
