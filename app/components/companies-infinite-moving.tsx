import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const CompaniesMovingCards = () => {
    return (
        <div className="h-[100vh] bg-white dark:bg-black">
            <p className="text-center pt-20 pb-14 font-thin dark:text-slate-50 text-slate-700">
                These companies are waiting for you! (150+ Companies)
            </p>
            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={imagesArray}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default CompaniesMovingCards




const imagesArray = [
    {
        title: "Cognizant",
    },
    {
        title: "Oracle",

    },
    {
        title: "Zoho",

    },
    {
        title: "Capgemini",
    },
    {
        title: "Deloitee"
    },
    {
        title: "Accenture"
    },
    {
        title: "TCS"
    },
    {
        title: "Genpact"
    },


];