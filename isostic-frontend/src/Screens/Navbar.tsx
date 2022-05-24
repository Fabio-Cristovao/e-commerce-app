import React from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
export default function Navbar() {

    const style = {
        color: "rgb(0, 94, 255)",
    }
    return (
        <nav className="flex justify-between items-center bg-white">
            <a href="/">
                <img src="/img/Isosticlogo.svg" alt="" className="h-20 w-40 p-2" alt="Isostic Logo" />
            </a>
            <ul className="flex justify-between items-center space-x-7 text-gray-700 p-2">
                <a href="/">Products</a>
                <a href="/budgets">Budgets</a>
                <a href="/contacts">Contacts</a>
                <a href="/auth">Login</a>
                <a href="/shoppinCart"><FaShoppingCart /></a>

            </ul>
        </nav>
    )
}
