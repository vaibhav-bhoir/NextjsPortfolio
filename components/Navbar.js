import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import {useTheme} from 'next-themes';
import navLinks from "./header_data";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';


const Navbar2 = () => {

    const [showNav, setShowNav] = useState(false);

    const {theme, setTheme} = useTheme()

    const router = useRouter();

    useEffect(() => {
        document.body.classList.toggle('isOpen', showNav);
    },[showNav])

    const toggleSidebar = () => {setShowNav(!showNav)}

    const toggleTheme = () => {setTheme(theme === 'dark' ? 'light' : 'dark')}

    return (
        <nav className="fixed w-full md:flex justify-between items-center text-white text-center bg-frosted dark:bg-darkblue p-9 md:p-3 z-50">
            <div className="flex items-center justify-between">
                <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    {/* <span className='text-4xl text-white font-bold uppercase tracking-wide'>
                    Vaibhav Bhoir
                    </span> */}
                    <img className="logo" src="logo.png" alt="logo"  />
                </a>
                </Link>

                <div className=""> 
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="h-12 w-12 md:hidden flex items-center"
                        onClick={toggleTheme}
                        >
                        {theme === 'dark' ? (<MdDarkMode/>) : (<MdOutlineWbSunny/>)}
                    </button>
                </div>

                <div className="block md:hidden"> 
                    {showNav ? (
                    <AiOutlineClose
                        onClick={toggleSidebar}
                        className="w-10 h-10 cursor-pointer"
                    />
                    ) : (
                    <AiOutlineBars
                        onClick={toggleSidebar}
                        className="w-10 h-10 cursor-pointer"
                    />
                    )}
                </div>
            </div>

            <ul
                style={{transition: "0.3s all"}} 
                className={`${
                showNav ? "left-0" : "-left-full" }
                " md:static fixed bottom-0 top-0 flex flex-col md:flex-row justify-center md:space-x-7 m-0 items-center md:bg-transparent md:dark:bg-transparent bg-gray-500 dark:bg-darkblue bg-opacity-90 dark:bg-opacity-90 md:w-auto w-10/12 p-2"
                `}
            >
                {
                    navLinks.map((link, index) => (

                        <Link href={link.path} key={index}>
                            <a onClick={toggleSidebar} className={`${router.pathname == link.path ? "border-b-2" : "" }  px-3 my-6 md:py-2 text-7xl md:text-3xl text-white font-bold items-center justify-center hover:bg-primary dark:hover:bg-jaguar hover:text-white `}>
                                {link.name}
                            </a>
                        </Link>
                    ))
                }
                <div className=""> 
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="h-12 w-12 hidden md:flex items-center"
                        onClick={toggleTheme}
                        >
                        {theme === 'dark' ? (<MdDarkMode/>) : (<MdOutlineWbSunny/>)}
                    </button>
                </div>
            </ul>
            <div className={`sidebar-overlay ${
                showNav ? "active" : '' }`} onClick={toggleSidebar}>
            </div>
        </nav>
    );
}

export default Navbar2
