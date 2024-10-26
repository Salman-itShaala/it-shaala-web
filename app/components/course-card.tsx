import React from 'react';
import javaIcon from "@/app/images/logo-java.png";
import Image from 'next/image';
import TextWithIcons from './icon-text';

const CourseCard = ({ courseTitle, instructor, courseIcon, courseHeading, courseSubHeading, flexDirection }: {
    courseTitle: string,
    instructor: string,
    courseIcon?: any,
    courseHeading: string,
    courseSubHeading: string,
    flexDirection: boolean
}) => {
    console.log(flexDirection)
    return (
        <div className={`w-full gap-10 flex py-16 ${flexDirection ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* <div className="" ref={animationContainer}></div> */}
            <div className="w-1/2 flex flex-col gap-4">
                {/* <p className='text-blue-600 font-black '>
                    Upcoming free webinar
                </p> */}
                <p className='text-2xl font-black text-blue-600'>

                    {courseTitle}
                </p>
                <p className='dark:text-slate-50 text-slate-700'>
                    By {" "}- {" "}{instructor}
                </p>
                <div className="flex gap-4 items-center justify-start">
                    <div className=" bg-slate-950 rounded-[50%] flex justify-center items-center p-1">
                        <Image src={courseIcon} alt='Java language logo' width={48} height={48}>
                        </Image>
                    </div>
                    <div className="">
                        <p className='font-semibold dark:text-white text-black'>
                            {courseHeading}
                        </p>
                        <p className='dark:text-slate-400 text-slate-800'>
                            {courseSubHeading}
                        </p>
                    </div>


                </div>

                <div>
                    <TextWithIcons text="Interact with mentors, ask your doubts away" />
                    <TextWithIcons text="Learn core concepts from experts in masterclass" />
                    <TextWithIcons text="Get a headstart and kickoff your career" />
                    <TextWithIcons text="Solve a real-life case study, live with the experts" />
                </div>
                <div>

                </div>
                {/* in this following a transitions is not getting applied check it hint: bg-image and bg-color */}
                <div className="flex justify-center gap-10 mt-8">
                    <a href="/courses" className="px-8 py-2 font-bold  rounded-full hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-600 border-2  border-blue-600 dark:from-blue-400 dark:to-blue-700 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-[2s]">
                        Download Broucher
                    </a>
                    <a href="/courses" className="px-8 py-2 font-bold  rounded-full bg-gradient-to-b border-2 border-blue-600 hover:bg-none from-blue-400 to-blue-400 dark:to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition-colors duration-700">
                        Explore Course
                    </a>
                </div>
            </div>



            <div className="w-1/2 bg-white rounded-xl"></div>
        </div>
    )
}

export default CourseCard