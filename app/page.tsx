import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";

export default function Home() {
  const words = ["Training.", "Upskilling."]
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-5xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 from-black dark:to-neutral-500 to-gray-800 sm:px-12  text-center overflow-hidden">
          <span className="text-blue-600">Pune’s #1</span> Platform for Job Placement and IT <FlipWords words={words} />
        </div>
        <p>
          this is text
        </p>
        <div>
          <p>
            text
          </p>
          <button>
            Book Demo
          </button>
        </div>
      </div>

      <div className="h-[100vh]"></div>
    </>
  );
}
