"use client";

import React, { useState } from "react";

const FAQ = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-950 sm:px-20 px-2 ">
        <p className="text-blue-600 font-black pb-2">FAQ.</p>
        <p className="text-2xl font-black dark:text-slate-50 text-slate-950">
          Do you have any question?
        </p>
      </div>
      <div className="bg-white dark:bg-neutral-950 mx-auto flex items-center flex-col sm:px-20 px-2  gap-4 py-8">
        {faqs.map((faq, idx) => {
          return <FaqCard key={faq.title} title={faq.title} content={faq.content} />
        })}
      </div>
    </>
  );
};

export default FAQ;


const FaqCard = ({
  title,
  content,
}: {
  title: string,
  content: string
}) => {
  const [isActive, setIsActive] = useState(false);
  const contentId = React.useId();

  return (
    <div className="w-full sm:w-[60vw] bg-gray-100 dark:bg-white/10 rounded-xl">
      <div className="p-6">
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className="flex items-center justify-between w-full gap-x-3 text-left group:"
          aria-expanded={isActive}
          aria-controls={contentId}
        >
          <span
            className={`md:text-lg font-semibold transition-colors
            ${isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-800 dark:text-neutral-200 group-hover:text-gray-500 dark:group-hover:text-neutral-400"
              }`}
          >
            {title}
          </span>
          <span className="flex items-center justify-center text-gray-600 dark:text-neutral-400">
            <svg
              className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isActive ? "block" : "hidden"
                }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <svg
              className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isActive ? "hidden" : "block"
                }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </span>
        </button>

        <div
          id={contentId}
          role="region"
          className={`grid transition-all duration-300 ease-in-out ${isActive
            ? "grid-rows-[1fr] opacity-100 pt-3"
            : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <p className="text-gray-800 dark:text-neutral-200">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const faqs = [
  {
    title: "Can I attend sessions in hybrid mode?",
    content: "Yes, the hybrid mode is eligible for students who have enrolled themselves for offline lectures.",
  },
  {
    title: "Where can I solve my doubts?",
    content: "Every Batch has discussion group where you can post your doubts. We also have live  calls twice a month!",
  },

  {
    title: "How can I purchase a course?",
    content: "You can enroll by visiting our website and filling out the registration form. Alternatively, you can visit our institute and register in person."
  },
  {
    title: "Do It shaala provide placements assistance?",
    content: "Yes, we provide extensive placement assistance, including resume building, interview preparation, and job placement support with our partner companies."
  },
  {
    title: "Is there EMI option available for paying the course fees?",
    content: "Yes, students can avail of No Cost EMI’s (No Interest EMI’s) at IT Shaala, for courses like Data Science and Full Stack Development.",
  },
]