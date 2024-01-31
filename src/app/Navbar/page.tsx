'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar bg-gray-900">
        <div className="navbar-start ">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                {isOpen && (
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <Link href="/"><li className="btn btn-ghost rounded-btn">Home</li></Link>
                    <Link href="/About"><li className="btn btn-ghost rounded-btn">About</li></Link>
                    <Link href="/SpecialOffers"><li className="btn btn-ghost rounded-btn">Special Offers</li></Link>
                    <Link href="/Services"><li className="btn btn-ghost rounded-btn">Services</li></Link>
                    <Link href="/Blog"><li className="btn btn-ghost rounded-btn">Blog</li></Link>
                    <Link href="/FAQs"><li className="btn btn-ghost rounded-btn">FAQs</li></Link>
                    <Link href="/OurTeam"><li className="btn btn-ghost rounded-btn">Our Team</li></Link>
                    <Link href="/ContactUs"><li className="btn btn-ghost rounded-btn">Contact Us</li></Link>
                    <li className='btn'>
                            <button onClick={()=>(document.getElementById('my_modal_4') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"><g fill="#f1f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M40,0c-5.46484,0 -9.92187,4.39844 -10,9.84375c0,0.05078 0,0.10547 0,0.15625c0,3.6875 1.99609,6.89063 4.96875,8.625c1.47656,0.86328 3.19922,1.375 5.03125,1.375c5.51563,0 10,-4.48437 10,-10c0,-5.51562 -4.48437,-10 -10,-10zM28.0625,10.84375l-10.21875,5.125c2.37891,2.0625 3.94141,5.03125 4.125,8.375l10.34375,-5.1875c-2.41406,-2.02734 -4.01172,-4.98047 -4.25,-8.3125zM10,15c-5.51562,0 -10,4.48438 -10,10c0,5.51563 4.48438,10 10,10c2.05078,0 3.94141,-0.625 5.53125,-1.6875c2.68359,-1.79297 4.46875,-4.83984 4.46875,-8.3125c0,-3.58984 -1.91016,-6.73437 -4.75,-8.5c-1.53125,-0.95312 -3.32031,-1.5 -5.25,-1.5zM21.96875,25.65625c-0.18359,3.33984 -1.71875,6.33984 -4.09375,8.40625l10.1875,5.09375c0.23828,-3.33203 1.80859,-6.28125 4.21875,-8.3125zM40,30c-2.0625,0 -3.96875,0.64453 -5.5625,1.71875c-2.66797,1.79688 -4.4375,4.82422 -4.4375,8.28125c0,0.01563 0,0.01563 0,0.03125c-0.04297,0.00391 -0.08203,0.02734 -0.125,0.03125l0.125,0.0625c0.06641,5.45703 4.52734,9.875 10,9.875c5.51563,0 10,-4.48437 10,-10c0,-5.51562 -4.48437,-10 -10,-10z"></path></g></g></svg>
                            </button>
                            <dialog id="my_modal_4" className="modal justify-center">
                                <div className="modal-box">
                                <h3 className="font-bold text-lg text-center">Share Us</h3>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-full p-2">
                                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.facebook.com/carezonehomecare/">
                                            <div className="flex flex-wrap items-center -m-2">
                                            <div className="w-auto p-2">
                                                <Image src="/facebook.svg" alt="Facebook logo" width={30} height={30} />
                                            </div>
                                            <div className="flex-1 p-2">
                                                <p className="text-gray-300">Share us on Facebook for updates</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div className="w-full p-2">
                                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.instagram.com/carezonehomecare/">
                                            <div className="flex flex-wrap items-center -m-2">
                                            <div className="w-auto p-2">
                                                <Image src="/instagram.svg" alt="Instagram logo" width={20} height={20} />
                                            </div>
                                            <div className="flex-1 p-2">
                                                <p className="text-gray-300">Share us on Instagram for updates</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div className="w-full p-2">
                                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.tiktok.com/@carezone.homecare?_t=8i41JKn6shV&_r=1">
                                            <div className="flex flex-wrap items-center -m-2">
                                            <div className="w-auto p-2">
                                                <Image src="/tiktok-white.svg" alt="TikTok logo" width={20} height={20} />
                                            </div>
                                            <div className="flex-1 p-2">
                                                <p className="text-gray-300">Share us on TikTok for updates</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                            <button onClick={()=>(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"><g fill="#ededed" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M39.03125,47c-0.01562,0 -0.03125,0 -0.04687,0c-7.51562,-0.24609 -16.32031,-7.53125 -22.38672,-13.60156c-6.07422,-6.07031 -13.35937,-14.87891 -13.59375,-22.35937c-0.08594,-2.625 6.35547,-7.29297 6.42188,-7.33984c1.67188,-1.16406 3.52734,-0.75 4.28906,0.30469c0.51563,0.71484 5.39844,8.11328 5.92969,8.95313c0.55078,0.87109 0.46875,2.16797 -0.21875,3.46875c-0.37891,0.72266 -1.63672,2.93359 -2.22656,3.96484c0.63672,0.90625 2.32031,3.12891 5.79688,6.60547c3.48047,3.47656 5.69922,5.16406 6.60938,5.80078c1.03125,-0.58984 3.24219,-1.84766 3.96484,-2.22656c1.28125,-0.67969 2.57031,-0.76562 3.44922,-0.22656c0.89844,0.55078 8.27734,5.45703 8.95703,5.92969c0.57031,0.40234 0.9375,1.08984 1.01172,1.89063c0.07031,0.80859 -0.17969,1.66406 -0.69922,2.41016c-0.04297,0.0625 -4.65625,6.42578 -7.25781,6.42578z"></path></g></g></svg>
                            </button>
                            <dialog id="my_modal_5" className="modal justify-center">
                                <div className="modal-box">
                                    <a href="tel:+971-555811796" className='mx-auto p-4 text-center text-blue-600'>Click here to call us at +971-555811796</a>
                                    <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                            <button onClick={()=>(document.getElementById('my_modal_6') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"><path fill="#CFD8DC" d="M40,10H8c-2.209,0-4,1.791-4,4v20c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V14C44,11.791,42.209,10,40,10z"></path><path fill="#78909C" d="M44,14.025c0-0.465-0.095-0.904-0.24-1.32L24,27.025L4.241,12.705C4.095,13.121,4,13.561,4,14.025V15l20,14.495L44,15V14.025z"></path></svg>
                            </button>
                            <dialog id="my_modal_6" className="modal justify-center">
                                <div className="modal-box w-full h-auto max-w-6xl">
                                    <section className="pt-14 pb-32 bg-[#1D232A] overflow-hidden">
                                        <div className="container mx-auto px-4">
                                            <div className="max-w-lg mx-auto text-center mb-14">
                                            <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white">Get in touch</h2>
                                            <p className="text-gray-400 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                            </div>
                                            <div className="flex flex-wrap max-w-xl mx-auto -m-2.5">
                                            <div className="w-full p-2.5">
                                                <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your full name"/>
                                            </div>
                                            <div className="w-full p-2.5">
                                                <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your email address"/>
                                            </div>
                                            <div className="w-full p-2.5"><textarea className="w-full h-40 px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 resize-none rounded" placeholder="Write message"></textarea></div>
                                            <div className="w-full p-2.5">
                                                <div className="group relative">
                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                                                <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                                                    <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded-md">
                                                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                                                    <p className="relative z-10 text-white hover:text-black">Send message</p>
                                                    </div>
                                                </button>
                                                </div>
                                            </div>
                                            <div className="w-full p-2.5">
                                                <p className="text-sm text-gray-500 text-center">
                                                <span>By clicking the send button, you agree with our</span>
                                                <a className="pb-1 hover:text-gray-400 border-b border-gray-500" href="#">Terms & Conditions</a>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </section>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                    </li>
                </ul>
                )}
            </div>
            <Link href="/" className='hidden lg:flex'>
                <Image className="mb-7" src="/logo.webp" alt="Logo" width={150} height={70} />
            </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
            <ul className="flex justify-center">
                <Link href="/"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Home</li></Link>
                <Link href="/About"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">About</li></Link>
                <Link href="/SpecialOffers"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Special Offers</li></Link>
                <Link href="/Services"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Services</li></Link>
                <Link href="/Blog"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Blog</li></Link>
                <Link href="/FAQs"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">FAQs</li></Link>
                <Link href="/OurTeam"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Our Team</li></Link>
                <Link href="/ContactUs"><li className="btn btn-ghost rounded-btn text-pink-100 text-md">Contact Us</li></Link>
            </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
            <button onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"><g fill="#f1f0f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M40,0c-5.46484,0 -9.92187,4.39844 -10,9.84375c0,0.05078 0,0.10547 0,0.15625c0,3.6875 1.99609,6.89063 4.96875,8.625c1.47656,0.86328 3.19922,1.375 5.03125,1.375c5.51563,0 10,-4.48437 10,-10c0,-5.51562 -4.48437,-10 -10,-10zM28.0625,10.84375l-10.21875,5.125c2.37891,2.0625 3.94141,5.03125 4.125,8.375l10.34375,-5.1875c-2.41406,-2.02734 -4.01172,-4.98047 -4.25,-8.3125zM10,15c-5.51562,0 -10,4.48438 -10,10c0,5.51563 4.48438,10 10,10c2.05078,0 3.94141,-0.625 5.53125,-1.6875c2.68359,-1.79297 4.46875,-4.83984 4.46875,-8.3125c0,-3.58984 -1.91016,-6.73437 -4.75,-8.5c-1.53125,-0.95312 -3.32031,-1.5 -5.25,-1.5zM21.96875,25.65625c-0.18359,3.33984 -1.71875,6.33984 -4.09375,8.40625l10.1875,5.09375c0.23828,-3.33203 1.80859,-6.28125 4.21875,-8.3125zM40,30c-2.0625,0 -3.96875,0.64453 -5.5625,1.71875c-2.66797,1.79688 -4.4375,4.82422 -4.4375,8.28125c0,0.01563 0,0.01563 0,0.03125c-0.04297,0.00391 -0.08203,0.02734 -0.125,0.03125l0.125,0.0625c0.06641,5.45703 4.52734,9.875 10,9.875c5.51563,0 10,-4.48437 10,-10c0,-5.51562 -4.48437,-10 -10,-10z"></path></g></g></svg>
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Share Us</h3>
                    <div className="flex flex-wrap -m-2">
                        <div className="w-full p-2">
                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.facebook.com/carezonehomecare/">
                            <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                                <Image src="/facebook.svg" alt="Facebook logo" width={30} height={30} />
                            </div>
                            <div className="flex-1 p-2">
                                <p className="text-gray-300">Share us on Facebook for updates</p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="w-full p-2">
                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.instagram.com/carezonehomecare/">
                            <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                                <Image src="/instagram.svg" alt="Instagram logo" width={20} height={20} />
                            </div>
                            <div className="flex-1 p-2">
                                <p className="text-gray-300">Share us on Instagram for updates</p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="w-full p-2">
                        <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.tiktok.com/@carezone.homecare?_t=8i41JKn6shV&_r=1">
                            <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                                <Image src="/tiktok-white.svg" alt="TikTok logo" width={20} height={20} />
                            </div>
                            <div className="flex-1 p-2">
                                <p className="text-gray-300">Share us on TikTok for updates</p>
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            <button onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"><g fill="#ededed" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M39.03125,47c-0.01562,0 -0.03125,0 -0.04687,0c-7.51562,-0.24609 -16.32031,-7.53125 -22.38672,-13.60156c-6.07422,-6.07031 -13.35937,-14.87891 -13.59375,-22.35937c-0.08594,-2.625 6.35547,-7.29297 6.42188,-7.33984c1.67188,-1.16406 3.52734,-0.75 4.28906,0.30469c0.51563,0.71484 5.39844,8.11328 5.92969,8.95313c0.55078,0.87109 0.46875,2.16797 -0.21875,3.46875c-0.37891,0.72266 -1.63672,2.93359 -2.22656,3.96484c0.63672,0.90625 2.32031,3.12891 5.79688,6.60547c3.48047,3.47656 5.69922,5.16406 6.60938,5.80078c1.03125,-0.58984 3.24219,-1.84766 3.96484,-2.22656c1.28125,-0.67969 2.57031,-0.76562 3.44922,-0.22656c0.89844,0.55078 8.27734,5.45703 8.95703,5.92969c0.57031,0.40234 0.9375,1.08984 1.01172,1.89063c0.07031,0.80859 -0.17969,1.66406 -0.69922,2.41016c-0.04297,0.0625 -4.65625,6.42578 -7.25781,6.42578z"></path></g></g></svg>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <a href="tel:+971-555811796" className='mx-auto p-4 text-center text-blue-600'>Click here to call us at +971-555811796</a>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            <button onClick={()=>(document.getElementById('my_modal_3') as HTMLDialogElement).showModal()} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"><path fill="#CFD8DC" d="M40,10H8c-2.209,0-4,1.791-4,4v20c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V14C44,11.791,42.209,10,40,10z"></path><path fill="#78909C" d="M44,14.025c0-0.465-0.095-0.904-0.24-1.32L24,27.025L4.241,12.705C4.095,13.121,4,13.561,4,14.025V15l20,14.495L44,15V14.025z"></path></svg>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full h-auto max-w-6xl">
                    <section className="pt-14 pb-32 bg-[#1D232A] overflow-hidden">
                        <div className="container mx-auto px-4">
                            <div className="max-w-lg mx-auto text-center mb-14">
                            <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white">Get in touch</h2>
                            <p className="text-gray-400 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                            </div>
                            <div className="flex flex-wrap max-w-xl mx-auto -m-2.5">
                            <div className="w-full p-2.5">
                                <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your full name"/>
                            </div>
                            <div className="w-full p-2.5">
                                <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your email address"/>
                            </div>
                            <div className="w-full p-2.5"><textarea className="w-full h-40 px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 resize-none rounded" placeholder="Write message"></textarea></div>
                            <div className="w-full p-2.5">
                                <div className="group relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                                <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                                    <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded-md">
                                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                                    <p className="relative z-10 text-white hover:text-black">Send message</p>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <div className="w-full p-2.5">
                                <p className="text-sm text-gray-500 text-center">
                                <span>By clicking the send button, you agree with our</span>
                                <a className="pb-1 hover:text-gray-400 border-b border-gray-500" href="#">Terms & Conditions</a>
                                </p>
                            </div>
                            </div>
                        </div>
                    </section>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
        <Link href="/" className='navbar-center ml-[-10%] flex lg:hidden'>
                <Image className="mb-7" src="/logo.webp" alt="Logo" width={150} height={70} />
        </Link>
    </div>
  )
}

export default Navbar