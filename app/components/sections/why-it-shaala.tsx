import React from 'react'
import Card from '../card'


const WhyItShaala = () => {
    return (
        <div className="w-full dark:bg-black bg-white relative flex flex-col gap-8 py-2">
            {/* <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-indigo-400 to-transparent h-full w-full absolute top-0 left-0 z-0"></div> */}
            <div className="flex flex-col gap-2 z-10">
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
            <div className="flex items-center justify-center gap-3 z-10 flex-col sm:flex-row">
                <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Learn live in classes" subHeading="Solve real-life problems, learn how to hack it with the experts!" />
                <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Secure a job in a dream company" subHeading="We'll help you get shortlisted by top recruiters, effortlessly!" />
                <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Level up your resume" subHeading="Shines out your resume in a sea of candidates. Ace the interview!" />
                <Card imgUrl="https://i0.wp.com/itshaala.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-11.14.50_1c5af0f6-scaled.jpg?resize=2048%2C1536&ssl=1" heading="Get mentored by the top educators" subHeading="Learn exclusive insights on things you didn't learn in school!" />

            </div>
            <div className="flex justify-center gap-10">
                <a href="/" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Contact us
                    </span>
                </a>
                {/* <a href="">Contact us</a> */}
                {/* <a href="">Explore more</a> */}

            </div>
        </div>
    )
}

export default WhyItShaala