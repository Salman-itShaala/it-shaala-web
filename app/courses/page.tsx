"use client"

import CourseCard from "../components/course-card";
import { TimelineDemo } from "../components/sections/course-timeline";
import Courses from "../components/sections/courses";
import FAQ from "../components/sections/faq";
import { LampContainer, LampDemo } from "../components/ui/lamp";
import { courses } from "../public/static-data";
import { motion } from "framer-motion";


export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl">
                We have designed the
                best IT courses <br />
                to guide you
                In your coding journey.
                {/* <div className="dark:text-white relative before:h-[2px] before:rounded-sm before:transition-all before:duration-500 hover:before:w-full before:w-0  before:-z-30 before:absolute before:top-1/2 translate-y-1/2 dark:before:bg-white before:bg-black flex justify-center items-center">
                    <p className="relative z-50 dark:bg-neutral-950 bg-white px-5">Designed by the experts.</p>
                </div> */}
            </div>
            <div className='w-full bg-white dark:bg-neutral-950 sm:px-20 px-2 py-16'>

                <div className="w-full gap-10 flex py-16 md:flex-row  flex-col-reverse">
                    <div className="md:w-1/2 w-full flex flex-col gap-10">
                        <div className="dark:text-white relative before:h-[2px] before:rounded-sm before:transition-all before:duration-500 hover:before:w-full before:w-0  before:-z-30 before:absolute before:top-1/2 translate-y-1/2 dark:before:bg-white before:bg-black flex justify-center items-center">
                            <p className="relative z-50 dark:bg-neutral-950 bg-white px-5">Designed by the experts.</p>
                        </div>
                        <p className="text-2xl font-black text-blue-600">
                            Explore the best IT courses from the best IT training and placement institute in Pune.
                        </p>
                        <p className="dark:text-slate-50 text-slate-700">
                            Learn Industry level skillset at your own speed, online-offline, hybrid however you want.
                        </p>



                    </div>

                    <div className="md:w-1/2 w-full md:h-auto min-h-[30vh] bg-white rounded-xl"></div>
                </div>


                <p className="text-neutral-50 font-semibold">
                    Courses ({courses.length})
                </p>


                {courses.map((course, i) => {
                    return <CourseCard
                        key={course.courseTitle}
                        courseTitle={course.courseTitle}
                        courseHeading={course.courseHeading}
                        courseSubHeading={course.courseSubHeading}
                        courseIcon={course.courseIcon}
                        instructor={course.instructor}
                        flexDirection={i % 2 === 0}
                        courseLInk={course.courseLink}
                    />
                })}
            </div>
            <FAQ />
        </>
    );
}
