import React from 'react';
import ContactForm from "@/app/components/contact-form";
import RequestCallBack from '../components/request-call-back';

const Contact = () => {
    return (
        <>
            <div className="min-h-screen sm:px-20 px-2 flex flex-col items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl">
                <p>Contact <span className='text-blue-600'> IT Shaala, </span> </p>
                <p> We are always here to help you...!</p>

                {/* <div className="dark:text-white relative before:h-[2px] before:rounded-sm before:transition-all before:duration-500 hover:before:w-full before:w-0  before:-z-30 before:absolute before:top-1/2 translate-y-1/2 dark:before:bg-white before:bg-black flex justify-center items-center">
                    <p className="relative z-50 dark:bg-neutral-950 bg-white px-5">Designed by the experts.</p>
                </div> */}
            </div>
            <RequestCallBack />
            <div className="">

            </div>
            <div className="w-full bg-white dark:bg-neutral-950 sm:px-20 px-2 py-28 pt-36">
                <ContactForm />
            </div>
        </>
    );
};

export default Contact;