import { faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedinIn, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons/faSquareYoutube'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full dark:bg-black dark:text-slate-50 text-slate-800'>
            <div className="w-full flex justify-between rounded-t-[76px] bg-gradient-to-b from-blue-700 to-blue-200  sm:px-20 px-2 py-10 ">
                <div className="">
                    <a href="/">
                        <svg width="218" height="43" viewBox="0 0 218 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41318 34.65C0.723178 32.7 -1.32682 26.17 1.30318 18.51C3.62318 11.75 8.26318 8.02002 10.0232 6.73002C14.8432 3.22002 21.6432 0.690023 27.6732 2.10002C28.5232 2.30002 29.3432 2.72002 29.8532 3.42002C31.6832 5.90002 29.3932 10.2 27.7532 12.21C25.8132 14.59 23.1332 16.25 20.4332 17.63C16.6232 19.58 12.6832 21.38 9.35318 24.1C5.94318 26.9 3.38318 30.74 1.41318 34.65Z" fill="black" />
                            <path d="M35.603 7.93005C36.293 9.88005 38.343 16.4101 35.713 24.0701C33.393 30.8301 28.753 34.5601 26.993 35.8501C22.173 39.3601 15.373 41.8901 9.34303 40.4801C8.49303 40.2801 7.67303 39.8601 7.16303 39.1601C5.33303 36.6801 7.62303 32.3801 9.26303 30.3701C11.203 27.9901 13.883 26.3301 16.583 24.9501C20.393 23.0001 24.333 21.2001 27.663 18.4801C31.063 15.6801 33.623 11.8401 35.603 7.93005Z" fill="black" />
                            <path d="M51.6431 7.79004H58.0631V34.5H51.6431V7.79004Z" fill="black" />
                            <path d="M82.733 13.52H74.973V34.51H68.553V13.52H60.793V7.79004H82.743V13.52H82.733Z" fill="black" />
                            <path d="M90.2231 27.9701L96.2931 25.6301C96.9431 28.1301 98.8331 29.4701 101.333 29.4701C103.523 29.4701 104.673 28.59 104.673 27.1301C104.673 22.3301 91.3731 24.98 91.3731 15.37C91.3731 10.64 94.8331 7.30005 101.093 7.30005C106.163 7.30005 109.783 9.88005 110.743 13.5601L104.713 15.9001C104.133 13.7501 102.713 12.75 100.793 12.75C98.7931 12.75 97.7931 13.6301 97.7931 14.8601C97.7931 19.4701 111.173 16.8201 111.173 26.9701C111.173 31.7001 107.253 35 100.713 35C95.5331 35 91.5731 32.4701 90.2231 27.9701Z" fill="black" />
                            <path d="M134.003 21.63V34.51H127.583V22.9C127.583 20.71 126.083 19.44 124.163 19.44C122.243 19.44 120.663 20.82 120.663 22.67V34.51H114.243V6.41003H120.663V15.56C122.043 14.44 123.893 13.75 126.123 13.75C130.883 13.75 134.003 16.98 134.003 21.63Z" fill="black" />
                            <path d="M158.523 14.2501V34.5101H152.603V32.6701C151.183 34.1701 149.263 35.0101 146.763 35.0101C140.883 35.0101 136.653 30.4701 136.653 24.4001C136.653 18.3301 140.883 14.1801 146.763 14.1801C149.263 14.1801 151.183 14.9501 152.603 16.3701V14.2501H158.523ZM152.373 24.3901C152.373 21.4301 150.493 19.3901 147.683 19.3901C144.993 19.3901 143.033 21.5001 143.033 24.3901C143.033 27.2701 144.953 29.3501 147.683 29.3501C150.483 29.3501 152.373 27.3201 152.373 24.3901Z" fill="black" />
                            <path d="M183.193 14.2501V34.5101H177.273V32.6701C175.853 34.1701 173.933 35.0101 171.433 35.0101C165.553 35.0101 161.323 30.4701 161.323 24.4001C161.323 18.3301 165.553 14.1801 171.433 14.1801C173.933 14.1801 175.853 14.9501 177.273 16.3701V14.2501H183.193ZM177.043 24.3901C177.043 21.4301 175.163 19.3901 172.353 19.3901C169.663 19.3901 167.703 21.5001 167.703 24.3901C167.703 27.2701 169.623 29.3501 172.353 29.3501C175.163 29.3501 177.043 27.3201 177.043 24.3901Z" fill="black" />
                            <path d="M186.843 6.41003H193.263V34.51H186.843V6.41003Z" fill="black" />
                            <path d="M217.973 14.2501V34.5101H212.053V32.6701C210.633 34.1701 208.713 35.0101 206.213 35.0101C200.333 35.0101 196.103 30.4701 196.103 24.4001C196.103 18.3301 200.333 14.1801 206.213 14.1801C208.713 14.1801 210.633 14.9501 212.053 16.3701V14.2501H217.973ZM211.823 24.3901C211.823 21.4301 209.943 19.3901 207.133 19.3901C204.443 19.3901 202.483 21.5001 202.483 24.3901C202.483 27.2701 204.403 29.3501 207.133 29.3501C209.943 29.3501 211.823 27.3201 211.823 24.3901Z" fill="black" />
                            <path d="M43.583 0V42.58" stroke="black" stroke-width="0.4549" stroke-miterlimit="10" />
                        </svg>

                    </a>
                    <p className=' pt-4 text-black'>
                        Supporting young graduates in enhancing their
                        <br />
                        learning and transform it into big earnings
                    </p>
                    <div className="pt-8">
                        <ul className='flex gap-4 items-center'>
                            <li>
                                {/* to add whats app number */}
                                <a href="/">
                                    <FontAwesomeIcon icon={faWhatsapp} color='black' className='h-6 w-6' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/itshaala_official/">
                                    <FontAwesomeIcon icon={faInstagram} color='black' className='h-6 w-6' />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faYoutube} color='black' className='h-6 w-6' />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faLinkedinIn} color='black' className='h-6 w-6' />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebookSquare} color='black' className='h-6 w-6' />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faXTwitter} color='black' className='h-6 w-6' />
                                </a>
                            </li>
                        </ul>
                        <div className='text-black'>
                            <p className='pt-6 text-black font-bold'>
                                Address:
                            </p>
                            <address className=' text-black pt-2'>
                                211, Kakade Bizz Icon, 2nd Floor, Block A,
                                <br />
                                Cts no 2687 b, Bhamburda, Shivajinagar,
                                <br />
                                Pune, Maharashtra 411005.
                            </address>
                            <p className='pt-6 font-bold'>
                                For any queries reach out:

                            </p>
                            <p className='pt-2'>
                                Mob no. - <a href="tel:+91 88620 64497">+91 88620 64497</a>
                                <br />

                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-black">
                    <p className='font-bold pb-6 text-2xl'>
                        Site map
                    </p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href="/about-us">About us</a>
                        </li>
                        <li>
                            <a href="/hire-from-us">Hire from us</a>
                        </li>
                        <li>
                            <a href="/placements">Placements</a>
                        </li>
                        <li>
                            <a href="/careers">Careers</a>
                        </li>
                        <li>
                            <a href="/placements">Gallery</a>
                        </li>

                        <li>
                            <a href="/placements">Contact us</a>
                        </li>

                        <li>
                            <a href="/placements">Open Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className="text-black">
                    <p className='font-bold pb-6 text-2xl'>
                        Site map
                    </p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href="/about-us">About us</a>
                        </li>
                        <li>
                            <a href="/placements">Placements</a>
                        </li>

                        <li>
                            <a href="/placements">Gallery</a>
                        </li>

                        <li>
                            <a href="/placements">Contact us</a>
                        </li>

                        <li>
                            <a href="/placements">Open Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className="text-black">
                    <p className='font-bold pb-6 text-2xl'>
                        Site map
                    </p>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href="/about-us">About us</a>
                        </li>

                        <li>
                            <a href="/placements">Placements</a>
                        </li>

                        <li>
                            <a href="/placements">Gallery</a>
                        </li>

                        <li>
                            <a href="/placements">Contact us</a>
                        </li>

                        <li>
                            <a href="/placements">Open Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center bg-blue-200 border-t text-slate-900 border-slate-900 p-5 ">
                © 2024. <span className='font-semibold'>IT Shaala</span>. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer