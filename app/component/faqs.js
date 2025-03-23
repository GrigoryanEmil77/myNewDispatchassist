"use client";
import React, { useState,useEffect } from "react";
import { getQuestions } from "@/_actions/faqsAction";
import './faqs.css'
import AOS from "aos";
import "aos/dist/aos.css";


const Faq = () => {
  const [activeFAQs, setActiveFAQs] = useState({});
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []); 

  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
 
        const response = await getQuestions();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setQuestion(response.data);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);
       
      }
     
    };

    fetchTruckTypes();
  }, []);


  const { titlefirst = "",titlesecond="",  questions1="",questions2="",questions3="",questions4="",
          questions5="", answer1="",answer2="",answer3="",answer4="",answer5="", } =
          questions.length > 0 ? questions[0] : {};

  const toggleFAQ = (id) => {
    setActiveFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container elements mt-5" id="FAQ">
      <div className="text-center mb-4 elements">
      <h2 className="text-center mb-4 elements" data-aos="flip-up" >{titlefirst} <span>{titlesecond}</span></h2>
      </div>
      <div className="w-layout-grid faq_list">
        {[
          {
            id: "faq1",
            question: questions1,
            answer:answer1
        },
          {
            id: "faq2",
            question: questions2,
            answer:answer2
            },
          {
            id: "faq3",
            question: questions3,
            answer:answer3
            },
          {
            id: "faq4",
            question: questions4,
            answer:answer4
            },
          {
            id: "faq5",
            question: questions5,
            answer:answer5
        },
        
   
        ].map((faq) => (
          <div key={faq.id} className="faq_accordion" data-aos="fade-right" >
            <div className="faq_question" data-aos="fade-right">
              <div className="text-size-medium-4 text-weight-bold">
                {faq.question}
              </div>
              <div
  className="faq4_icon"
  role="button"
  tabIndex={0}
  onClick={() => toggleFAQ(faq.id)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleFAQ(faq.id);
  }}
  style={{ cursor: "pointer" }}
  aria-label={`Toggle FAQ ${faq.id}`}
>
                <i
                  className={`bi ${
                    activeFAQs[faq.id] ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
            </div>
            {activeFAQs[faq.id] && (
              <div className="faq4_answer">
                <p className="faq-answer-txt">{faq.answer}</p>
              </div>
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Faq;