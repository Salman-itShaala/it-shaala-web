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