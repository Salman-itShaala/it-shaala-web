import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";
// import { Highlight } from "./components/ui/hero-highlight";

export default function Home() {
  const words = ["Training.", "Upskilling."]
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-5xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 from-black dark:to-neutral-500 to-gray-800 sm:px-12 py-4 mt-16 text-center overflow-hidden">
          <span className="text-blue-600">Pune’s #1</span> Platform for Job Placement and IT <br /> <FlipWords words={words} />
        </div>
        <div>
          <p className="text-sm sm:text-lg z-20 sm:px-14 py-4  text-center overflow-hidden dark:text-slate-100 text-slate-950">
            Start your journey toward a successful tech career today by enrolling in our classes! You'll receive personalised training and dedicated placement support.
          </p>
          <div className="w-full flex justify-center items-center gap-8 text-center pt-6">
            <a href="/courses" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-400 to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
              Explore courses
            </a>
            {/* <a href="/" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-400 to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
              Book a demo
            </a> */}
          </div>
        </div>
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
}
