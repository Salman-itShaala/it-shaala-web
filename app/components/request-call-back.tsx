import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RequestCallBack = () => {
    return (
        <div className='w-full bg-white dark:bg-neutral-950 sm:px-20 px-2'>
            <div className="w-full bg-blue-600 flex justify-between items-center  p-8 rounded-xl">
                <p className='text-3xl font-bold text-white'>
                    <FontAwesomeIcon icon={faMessage} className='pr-4 h-8 w-8' />
                    Request a callback.
                    <br />
                    <span className='text-lg font-thin'>
                        Request a callback to get in touch with our academic counsellors.
                    </span>
                </p>
                <div>
                    <a href="/" className='px-8 py-3 font-bold  rounded-full bg-gradient-to-b hover:bg-slate-300 bg-slate-100 focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400'>Request a callback</a>
                </div>
            </div>
        </div>
    )
}

export default RequestCallBack