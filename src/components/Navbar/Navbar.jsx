import React from 'react';
import logo from '../../assets/logo.png'
import { FaCartShopping } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a >About</a></li>
                        <li><a>Service</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="flex  items-center">

                    <img className='w-10' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">Ai Hub
                    </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg gap-7">
                    <li><a>Home</a></li>
                    <li><a >About</a></li>
                    <li><a>Service</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3 ">
                <button className='btn  rounded-full text-lg text-error font-bold'> <FiShoppingCart></FiShoppingCart></button>
                <a className="btn bg-[#fb2c36] text-white font-bold rounded-full">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;