import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { MdFavorite } from "react-icons/md"
import { AuthContext } from '../contexts/Auth/AuthContext';
export default function Navbar() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate("/");
    }

    const [navbarOpen, setNavbarOpen] = React.useState(false);


    return (
        <div className="bg-slate-50 w-full shadow h-30">
            <nav className="relative flex flex-wrap items-center justify-between px-2">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-bg-red-50"
                            to="/"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img src="./img/Isosticlogo.svg" className="h-11 w-30" alt="" />

                        </Link>
                        <button
                            className="text-grey-50 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu className="text-sky-700 h-7 w-7" />
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
                                    <i className="fab fa-facebook-square text-lg leading-lg text-sky-700 opacity-75"></i><span className="ml-2 text-sm">Products</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold  text-sky-700 hover:opacity-75"
                                    to="/budgets"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-sky-700 opacity-75">
                                    </i>
                                    <span className="ml-2 text-sm">Budgets</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/contacts"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-sky-700 opacity-75"></i><span className="ml-2 text-sm">Contacts</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/orders"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-sky-700 opacity-75"></i><span className="ml-2 text-sm">Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/favorites"
                                >
                                    < MdFavorite className=" text-sky-700 opacity-75 h-7 w-7" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                    to="/cart"
                                >
                                    < FaShoppingCart className=" text-sky-700 opacity-75 h-7 w-7" />
                                </Link>
                            </li>
                            {!auth.user &&
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                        to="/auth"
                                    >
                                        <BiLogIn className=" text-sky-700 opacity-75 h-7 w-7" />
                                    </Link>
                                </li>
                            }
                            {auth.user &&
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-sky-700 hover:opacity-75"
                                        to="/home"
                                    >
                                        <BiLogOut
                                            className=" text-sky-700 opacity-75 h-7 w-7"
                                            onClick={handleLogout}
                                        />
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}



