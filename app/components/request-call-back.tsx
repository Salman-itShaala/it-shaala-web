import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RequestCallBack = () => {
    return (
        <div className="w-full bg-white dark:bg-neutral-950 sm:px-20 px-2 py-4">
            <div className="w-full bg-blue-600 flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-0">
                <p className="text-xl sm:text-3xl font-bold text-white">
                    <FontAwesomeIcon icon={faMessage} className="pr-2 sm:pr-4 h-6 w-6 sm:h-8 sm:w-8" />
                    Request a callback.
                    <br />
                    <span className="text-sm sm:text-lg font-thin">
                        Request a callback to get in touch with our academic counsellors.
                    </span>
                </p>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                    <a href="/" className="px-6 sm:px-8 py-2 sm:py-3 font-bold rounded-full bg-gradient-to-b hover:bg-slate-300 bg-slate-100 focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-400 text-center w-full sm:w-auto">
                        Request a callback
                    </a>
                </div>
            </div>
        </div>

    )
}

export default RequestCallBack