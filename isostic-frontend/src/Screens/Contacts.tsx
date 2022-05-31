import React from 'react'
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contacts() {
    return (
        <>
            <h1 className="text-5xl text-sky-600 font-bold text-center py-10">We are here for you!</h1>
            <div className="flex w-full min-h-screen justify-center items-center">
                <div className=" flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0
                 bg-sky-700 w-full max-w-6xl p-8 rounded-md shadow-lg ">
                    <div className="flex flex-col space-y-8 justify-between text-slate-50 lg:max-w-xl">
                        <div>
                            <h1 className="font-bold text-5xl tracking-wide text-center mb-6">Get in touch!</h1>
                            <p className="pt-4 text-slate-50 text-2xl">You can always reach us by our email address our phone number. We will aswer your request as soon as we can. </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex items-center gap-3 text-stone-400">
                                <AiFillPhone className="text-xl" />
                                <span className="text-slate-50"> +999 999 999 999</span>
                            </div>
                            <div className="inline-flex items-center gap-3 text-stone-400">
                                <AiOutlineMail className="text-xl" />
                                <span className="text-slate-50"> fakemail@mail.com</span>
                            </div>
                            <div className="inline-flex items-center gap-6 text-slate-50 justify-evenly mx-3">
                                <div className="flex flex-col ">
                                    <GoLocation className="text-xl text-stone-400" />
                                    <span className="">
                                        Rua dos Pedregulhos n 30 ALgures</span>
                                    <span> 9999-999 Algures Cidade</span>
                                    <span> Pais</span>
                                </div>
                                <div className="flex flex-col ">
                                    <GoLocation className="text-xl text-stone-400" />
                                    <span className="">
                                        Rua dos Pedregulhos n 30 ALgures</span>
                                    <span> 9999-999 Algures Cidade</span>
                                    <span> Pais</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8 text-2xl">
                            <span><FaFacebookSquare /></span>
                            <span><FaTwitter /></span>
                            <span><FaInstagramSquare /></span>
                            <span><FaLinkedin /></span>
                        </div>
                    </div>
                    <div className="bg-stone-400 rounded-lg shadow-lg p-8 border-sky-900 border-4 lg:min-w-85">
                        <form action="" className="flex flex-col space-y-8">
                            <h2 className="font-bold text-center text-3xl text-slate-50">How can we help you?</h2>
                            <div>
                                <input type="text" placeholder="Your First Name..." className="ring-1 ring-stone-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-700" />

                            </div>
                            <div>
                                <input type="text" placeholder="Your Last Name..." className="ring-1 ring-stone-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-700" />

                            </div>
                            <div>
                                <input type="text" placeholder="Your Email Address..." className="ring-1 ring-stone-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-700" />

                            </div>
                            <div className="flex justify-center">
                                <textarea className="ring-1 ring-stone-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-sky-700" name="" id="" rows="5" placeholder="Your message..."></textarea>
                            </div>
                            <button className="inline-block self-end bg-sky-700 text-white font-bold rounded-lg px-6 py-2 uppercase">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


