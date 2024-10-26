import Image from 'next/image'
import React from 'react'
import { FlipWords } from '../ui/flip-words'
import javaIcon from "@/app/images/logo-java.png";
import pythonIcon from "@/app/images/python-94.png";
import githubIcon from "@/app/images/git-hub.png";


const HeroSection = () => {
    const words = ["Training.", "Upskilling."]

    return (
        <div className="h-[100vh] w-full dark:bg-black z-50 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="h-[64px] w-[64px] z-[99] -rotate-45 bg-transparent top-36 left-36  absolute animate-bounce">
                <Image className="rotate-12 relative z-[99] bg-transparent drop-shadow-\[0_16px_24px_rgba\(247\2c 147\2c 20\2c 0\.35\)\]" src={javaIcon} height={64} width={64} alt="Java logo"></Image>
                <FontAwesomeIcon icon={faCopy} color='#fff' />
            </div> */}
            {/* <div className="h-[64px] w-[64px] z-[99] -rotate-45 bg-transparent bottom-[-20px] left-[58%]  absolute animate-bounce">
          <Image className="rotate-12 relative z-[99] bg-transparent drop-shadow-\[0_16px_24px_rgba\(247\2c 147\2c 20\2c 0\.35\)\]" src={pythonIcon} height={64} width={64} alt="Java logo"></Image>
        </div>
        <div className="h-[64px] w-[64px] z-[99] -rotate-45 bg-transparent top-20 right-36  absolute animate-bounce">
          <Image className="rotate-12 relative z-[99] bg-transparent drop-shadow-\[0_16px_24px_rgba\(247\2c 147\2c 20\2c 0\.35\)\]" src={githubIcon} height={64} width={64} alt="Java logo"></Image>
        </div> */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="text-5xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 from-black dark:to-neutral-500 to-gray-800 sm:px-12 py-4 mt-24 text-center overflow-hidden">
                <span className="text-blue-600">Pune’s #1</span> Platform for Job Placement and IT <br /> <FlipWords words={words} />
            </div>
            <div>
                <p className="text-sm sm:text-2xl z-20 sm:px-14 py-4  text-center overflow-hidden dark:text-slate-100 text-slate-950">
                    Start your journey toward a successful tech career today by enrolling in our classes! You'll receive personalised training and dedicated placement support.
                </p>
                <div className="w-full flex justify-center items-center gap-8 text-center pt-6 relative z-50">
                    <a href="/courses" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-800 to-blue-400 dark:from-blue-400 dark:to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
                        Explore courses
                    </a>
                    {/* <a href="/" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 from-blue-400 to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400">
              Book a demo
            </a> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection