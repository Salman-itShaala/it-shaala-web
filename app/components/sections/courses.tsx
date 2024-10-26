import React from 'react'
import CourseCard from '../course-card'

const Courses = () => {
    return (
        <div className='w-full bg-white dark:bg-black sm:px-20 px-2 py-16'>
            <p className='text-blue-600 font-black pb-4'>
                Our courses
            </p>
            <p className='text-2xl font-black dark:text-slate-50 text-slate-950 pb-4'>
                Build your career with our best it courses.
            </p>
            <div className="">
                <CourseCard />
            </div>
        </div>
    )
}

export default Courses