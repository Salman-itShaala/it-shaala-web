import React from 'react'
import TestimonialCard from '../testmimonial-card'


const Testimonials = () => {
    return (
        <div className='w-full bg-white dark:bg-black sm:px-20 px-2 py-16 flex gap-4 justify-center'>
            <div className="flex flex-col gap-4 w-96">
                {testimonils1.map((t, i) => {
                    return <TestimonialCard
                        key={t.message}
                        studentName={t.studentName}
                        studentBatch={t.studentBatch}
                        message={t.message}
                    />
                })}
            </div>
            <div className="flex flex-col gap-4 w-96">
                {testimonils2.map((t, i) => {
                    return <TestimonialCard
                        key={t.message}
                        studentName={t.studentName}
                        studentBatch={t.studentBatch}
                        message={t.message}
                    />
                })}
            </div>
            <div className="flex flex-col gap-4 w-96">
                {testimonils3.map((t, i) => {
                    return <TestimonialCard
                        key={t.message}
                        studentName={t.studentName}
                        studentBatch={t.studentBatch}
                        message={t.message}
                    />
                })}
            </div>
        </div>
    )
}


export default Testimonials


const testimonils1 = [
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur lorem lorem ispusm doler this is something more odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    }
]


const testimonils2 = [
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    }
]


const testimonils3 = [
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi exercitationem nostrum aliquid."
    },
    {
        studentName: "Salman Shaikh",
        studentBatch: "Batch - ISJ007 Aug 2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium laborum odio quidem atque molestiae sunt."
    }
]

