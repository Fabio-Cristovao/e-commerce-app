import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi"
export default function Navbar() {


    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        /*  <div className="container max-w-6xl mx-auto">
             <nav className="flex flex-wrap items-center justify-between w-full py-2 md: py-0 px-0 text-lg text-gray-700 bg-white">
                 <div>
                     <Link to="/">
                         <img src="/img/Isosticlogo.svg" alt="" className="h-20 w-40 p-2" alt="Isostic Logo" />
                     </Link>
                 </div>
                 <div>
                     <IoIosMenu className="block md:hidden h-8 w-8 m-4" />
                 </div>
 
                 <div className="hidden md:flex items-center">
                     <ul className="flex flex-col items-center space-x-7 text-gray-700 p-2 ">
                         <Link to="/">Products</Link>
                         <Link to="/budgets">Budgets</Link>
                         <Link to="/contacts">Contacts</Link>
                         <Link to="/auth">Login</Link>
                         <Link to="/shoppinCart"><FaShoppingCart style={style} /></Link>
                     </ul>
                 </div>
             </nav>
         </div> */




        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            <img src="./img/Isosticlogo.svg" className="h-24 w-30" alt="" />
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu className="text-blue-600 h-8 w-8" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                                    to="/products"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Products</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold  text-blue-600 hover:opacity-75"
                                    to="/budget"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75">
                                    </i>
                                    <span className="ml-2">Budget</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                                    to="/contacts"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contacts</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                                    to="/cart"
                                >
                                    < FaShoppingCart className=" text-blue-600 opacity-75 h-7 w-7" />
                                    <span className="ml-2"> Cart</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                                    to="/auth"
                                >
                                    <BiLogIn className=" text-blue-600 opacity-75 h-7 w-7" />
                                    <span className="ml-2">Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}



