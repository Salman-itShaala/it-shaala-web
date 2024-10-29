import React from 'react'
import CourseCard from '../course-card'
import javaIcon from "@/app/images/logo-java.png"

const Courses = () => {
    return (
        <div className='w-full bg-white dark:bg-black sm:px-20 px-2 py-16'>
            <p className='text-blue-600 font-black pb-4'>
                Our courses
            </p>
            <p className='text-2xl font-black dark:text-slate-50 text-slate-950 pb-4'>
                Build your career with our best it courses.
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
                />
            })}
            <div className="flex justify-center gap-10">
                <a href="/" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Explore All Courses
                    </span>
                </a>
                {/* <a href="">Contact us</a> */}
                {/* <a href="">Explore more</a> */}
            </div>
        </div>
    )
}

export default Courses



const courses = [
    {
        courseTitle: "JAVA FULL STACK COURSE",
        instructor: "Sandeep Sir.",
        courseIcon: javaIcon,
        courseHeading: "Experience the high quality knowledge, level up your skills.Get placed as Java full stack developer.",
        courseSubHeading: "Learn with the best",
        flexDirection: "flex-row-reverse"
    },
    {
        courseTitle: "PYTHON FULL STACK COURSE",
        instructor: "Balaji Sir.",
        courseIcon: javaIcon,
        courseHeading: "Experience the high quality knowledge, level up your skills.Get placed as Java full stack developer.",
        courseSubHeading: "Learn with the best",
        flexDirection: "flex-row"
    },
    {
        courseTitle: "MERN STACK",
        instructor: "Salman Sir.",
        courseIcon: javaIcon,
        courseHeading: "Experience the high quality knowledge, level up your skills.Get placed as Java full stack developer.",
        courseSubHeading: "Learn with the best",
        flexDirection: "flex-row"
    }
]