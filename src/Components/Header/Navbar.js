import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-black text-base-300'>
            <div className="navbar justify-between container mx-auto">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#f4181c] text-white  rounded-box w-52">
                            <li><Link href="/" className=''>Home</Link></li>
                            <li> <Link href="" className=''>Movies</Link></li>
                            <li><Link href="" className=''>Series</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="font-semibold text-xl text-white">Fun Stream</Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-300">
                        <li><Link href="/" className='hover:text-white'>Home</Link></li>
                        <li> <Link href="" className='hover:text-white'>Movies</Link></li>
                        <li><Link href="" className='hover:text-white'>Series</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="p-2 bg-[#f4181c] text-white rounded-sm border-0 text-md hover:bg-white hover:text-[#f4181c] duration-500 ease-linear">Subscribe now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;