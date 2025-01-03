"use client";
import React, { useEffect, useRef } from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import Lottie from 'lottie-web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import TextWithIcons from './icon-text';
import infosysLogo from "@/app/images/infosys.png";
import oracleLogo from "@/app/images/oracle.png";
import capgeminiLogo from "@/app/images/capgemini.png";
import zohoLogo from "@/app/images/zoho.png";
import deloitteLogo from "@/app/images/deloitte.png";
import accentureLogo from "@/app/images/accenture.png";
import tcsLogo from "@/app/images/tcs.png";
import genpactLogo from "@/app/images/genpact.png";
import Image from 'next/image';

const CompaniesMovingCards = () => {
    const animationContainer = useRef(null);
    useEffect(() => {

        if (animationContainer.current === null) return;

        Lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "https://lottie.host/67bbb1ba-b1c4-4173-959b-b7541987dcb2/OmCw4Kw6yn.json"
        })
    }, []);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };

    return (
        <div className="w-full bg-white dark:bg-neutral-950">
            <p className="text-center pt-20 pb-14 font-thin dark:text-slate-50 text-slate-700">
                These companies are waiting for you! (150+ Companies)
            </p>
            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-neutral-950 items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={imagesArray}
                    direction="left"
                    speed="slow"
                />
            </div>
            <div className="w-full gap-10 sm:px-20 px-2 flex flex-col-reverse md:flex-row py-16">
                {/* <div className="" ref={animationContainer}></div> */}
                <div className="md:w-1/2 w-full flex flex-col gap-4">
                    <p className='text-blue-600 font-black '>
                        Upcoming free webinar
                    </p>
                    <p className='text-2xl font-black dark:text-slate-50 text-slate-950'>
                        Level up your skills, learn from the best
                    </p>

                    <div className="flex gap-4 items-center justify-start">
                        <div className=" bg-blue-600 rounded-[50%] h-14 w-14 flex justify-center items-center p-4">
                            <FontAwesomeIcon icon={faLaptopCode} className='text-black h-10 w-10' />
                        </div>
                        <div className="">
                            <p className='font-semibold dark:text-white text-black'>
                                Experience the webinar, level up your skills and say bye to your doubts.
                            </p>
                            <p className='dark:text-slate-400 text-slate-800'>
                                Learn with the best
                            </p>
                        </div>
                    </div>

                    <div>
                        <TextWithIcons text="Interact with mentors, ask your doubts away" />
                        <TextWithIcons text="Learn core concepts from experts in masterclass" />
                        <TextWithIcons text="Get a headstart and kickoff your career" />
                        <TextWithIcons text="Solve a real-life case study, live with the experts" />
                    </div>
                    {/* in this following a transitions is not getting applied check it hint: bg-image and bg-color */}
                    <div className="flex justify-center gap-10 mt-8">
                        <a href="/courses" className="px-8 py-2 font-bold  rounded-full hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 border-2  border-blue-600 dark:from-blue-400 dark:to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-[2s]">
                            Register Webinar
                        </a>
                        <a href="/courses" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b border-2 border-blue-600 hover:bg-none from-blue-400 to-blue-400 dark:to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition-colors duration-700">
                            Request Demo
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 w-full md:h-auto h-[30vh] bg-white rounded-xl"></div>
            </div>
        </div>
    )
}

export default CompaniesMovingCards


const imagesArray = [
    {
        title: "",
        image: <Image src={infosysLogo} alt='infosys logo' />
    },
    {
        title: "",
        image: <Image src={oracleLogo} alt='Oracle logo' />

    },
    {
        title: "",
        image: <Image src={zohoLogo} alt='Zoho logo' />

    },
    {
        title: "",
        image: <Image src={capgeminiLogo} alt='capgemini logo' />
    },
    {
        title: "",
        image: <Image src={deloitteLogo} alt='Deloitte logo' />
    },
    {
        title: "",
        image: <Image src={accentureLogo} alt='Accenture Logo' />
    },
    {
        title: "",
        image: <Image src={tcsLogo} alt='TCS Logo' />
    },
    {
        title: "",
        image: <Image src={genpactLogo} alt='Genpact Logo' />
    },


];