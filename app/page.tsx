import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";
import { Highlight } from "./components/ui/hero-highlight";
import Card from "./components/card";

export default function Home() {
  const words = ["Training.", "Upskilling."]
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-5xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 from-black dark:to-neutral-500 to-gray-800 sm:px-12 py-4 mt-24 text-center overflow-hidden">
          <span className="text-blue-600">Pune’s #1</span> Platform for Job Placement and IT <br /> <FlipWords words={words} />
        </div>
        <div>
          <p className="text-sm sm:text-2xl z-20 sm:px-14 py-4  text-center overflow-hidden dark:text-slate-100 text-slate-950">
            Start your journey toward a successful tech career today by enrolling in our classes! You'll receive personalised training and dedicated placement support.
          </p>
          <div className="w-full flex justify-center items-center gap-8 text-center pt-6">
            <a href="/courses" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-800 to-blue-400 dark:from-blue-400 dark:to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
              Explore courses
            </a>
            {/* <a href="/" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-400 to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
              Book a demo
            </a> */}
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full dark:bg-black bg-white relative flex flex-col gap-8 pt-2">
        <div className="flex flex-col gap-2">
          <p className="text-center text-blue-600 font-black ">
            Why <span className="">IT Shaala
            </span>
          </p>
          <p className="text-center text-2xl font-black dark:text-slate-50 text-slate-950">

            From Student to It Professional.
            {/* <span className="bg-yellow-500 rounded-sm px-2 py-1 text-slate-800 font-bold"> */}
            {/* </span> */}
          </p>
          <p className="text-center dark:text-slate-400 text-slate-700">
            Enroll in our courses and we'll prepare you to be that talent industry is lookin for.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Learn live in classes" subHeading="Solve real-life problems, learn how to hack it with the experts!" />
          <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Secure a job in a dream company" subHeading="We'll help you get shortlisted by top recruiters, effortlessly!" />
          <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Level up your resume" subHeading="Shines out your resume in a sea of candidates. Ace the interview!" />
          <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Get mentored by the top educators" subHeading="Learn exclusive insights on things you didn't learn in school!" />

        </div>
      </div>
      {/* <div className="h-[100vh] bg-black"></div> */}
    </>
  );
}
