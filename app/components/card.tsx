import Image from 'next/image'
import { it } from 'node:test'
import React from 'react'

const Card = (item: { imgUrl: string, heading: string, subHeading: string }) => {
    return (
        <div className="sm:w-[22vw] h-[76vh] hover:scale-[1.01] dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 transition-all duration-500 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl p-2 flex flex-col justify-between items-center">
            <div className="p-2 h-[30%]">
                <div className="font-bold text-xl mb-2 text-blue-600">{item.heading}</div>
                <p className="text-gray-700 text-base dark:text-slate-400">
                    {item.subHeading}
                </p>
            </div>
            <img className="w-full rounded-b-2xl h-[75%] object-cover" src={item.imgUrl} alt={item.heading} />
        </div>
    )
}

export default Card