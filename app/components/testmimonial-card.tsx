import React from 'react'

const TestimonialCard = ({ studentName, studentBatch, message }: {
    studentName: string,
    studentBatch: string,
    message: string
}) => {
    return (
        <div className='border-slate-600 border rounded-2xl p-4'>
            <div className="border-b-[1px] border-slate-600 pb-4 flex gap-4">
                <div className="rounded-full bg-violet-600 h-12 w-12">
                </div>
                <div className="">
                    <p className='font-bold dark:text-slate-100 '>
                        {studentName}

                    </p>
                    <p className='dark:text-slate-400 font-thin text-xs'>
                        {studentBatch}
                    </p>
                </div>
            </div>
            <div className="pt-4 dark:text-slate-200">
                <p className='font-light'>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard