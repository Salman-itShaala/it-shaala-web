import React from 'react'
import PlacementCard from '../components/placement-card'
import Testimonials from '../components/sections/testimonials'

const Placements = () => {
    return (
        <>
            <div className="min-h-screen sm:px-20 px-2 flex flex-col items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl">
                <p>Success <span className='text-blue-600'> Stories, </span> </p>
                <p> Your Journey Could Be Next...!</p>

                {/* <div className="dark:text-white relative before:h-[2px] before:rounded-sm before:transition-all before:duration-500 hover:before:w-full before:w-0  before:-z-30 before:absolute before:top-1/2 translate-y-1/2 dark:before:bg-white before:bg-black flex justify-center items-center">
                    <p className="relative z-50 dark:bg-neutral-950 bg-white px-5">Designed by the experts.</p>
                </div> */}
            </div>
            <div className='w-full bg-white dark:bg-neutral-950 dark:text-white sm:px-20 px-2 py-16'>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                    <PlacementCard />
                </div>

            </div>
            <div className="mt-16">
                <Testimonials />
            </div>
            
        </>
    )
}

export default Placements