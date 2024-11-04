"use client";

import React, { useState } from "react";

const FAQ = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-black sm:px-20 px-2 ">
        <p className="text-blue-600 font-black pb-2">FAQ.</p>
        <p className="text-2xl font-black dark:text-slate-50 text-slate-950">
          Do you have any question?
        </p>
      </div>
      <div className="bg-white dark:bg-black mx-auto flex items-center flex-col sm:px-20 px-2  gap-4 py-8">
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </div>
    </>
  );
};

export default FAQ;

// const FaqCard = () => {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <div className="sm:w-[60vw] w-full bg-gray-100 rounded-xl p-6 dark:bg-white/10">
//       <button
//         onClick={() => setIsActive((prv) => !prv)}
//         className="pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
//         aria-expanded="false"
//         aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
//       >
//         Upgrade License Type
//         <svg
//           className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
//             isActive ? "block" : "hidden"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         >
//           <path d="m6 9 6 6 6-6" />
//         </svg>
//         <svg
//           className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
//             isActive ? "hidden" : "block"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         >
//           <path d="m18 15-6-6-6 6" />
//         </svg>
//       </button>
//       <div
//         className={`overflow-hidden transition-[display] duration-300 ${
//           isActive ? "block" : "hidden"
//         }`}
//       >
//         <p className="text-gray-800 dark:text-neutral-200">
//           There may be times when you need to upgrade your license from the
//           original type you purchased and we have a solution that ensures you
//           can apply your original purchase cost to the new license purchase.
//         </p>
//       </div>
//     </div>
//   );
// };

const FaqCard = ({
  title = "Upgrade License Type",
  content = "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
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
            ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-800 dark:text-neutral-200 group-hover:text-gray-500 dark:group-hover:text-neutral-400"
            }`}
          >
            {title}
          </span>
          <span className="flex items-center justify-center text-gray-600 dark:text-neutral-400">
            <svg
              className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                isActive ? "block" : "hidden"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
            <svg
              className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${
                isActive ? "hidden" : "block"
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
          className={`grid transition-all duration-300 ease-in-out ${
            isActive
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
