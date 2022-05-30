import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi"
export default function Navbar() {


    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <div className="bg-red-50 w-full shadow h-30">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-bg-red-50"
                            to="/"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img src="./img/Isosticlogo.svg" className="h-24 w-30" alt="" />

                        </Link>
                        <button
                            className="text-red-50 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu className="text-sky-700 h-8 w-8" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row ml-auto list-none lg:ml-auto"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/products"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-sky-700 opacity-75"></i><span className="ml-2">Products</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold  text-sky-700 hover:opacity-75"
                                    to="/budget"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-sky-700 opacity-75">
                                    </i>
                                    <span className="ml-2">Budget</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/contacts"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-sky-700 opacity-75"></i><span className="ml-2">Contacts</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/cart"
                                >
                                    < FaShoppingCart className=" text-sky-700 opacity-75 h-7 w-7" />
                                    <span className="ml-2"> Cart</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/auth"
                                >
                                    <BiLogIn className=" text-sky-700 opacity-75 h-7 w-7" />
                                    <span className="ml-2">Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}



