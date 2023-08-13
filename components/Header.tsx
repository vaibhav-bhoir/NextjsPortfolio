import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import navLinks from '../public/data/header_data';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import Lottie from 'lottie-react';
import logoAnimation from '../public/animations/v-logo-animation-data.json';
import ThemeChanger from './ThemeChanger';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.classList.toggle('isOpen', showNav);

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 250);
    });
  }, [showNav]);

  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <header
      className={`${
        scroll ? 'navbar-shrink' : ''
      } fixed top-0 w-full md:flex justify-between items-center text-white text-center bg-pearl-black p-4 md:px-7 md:py-0 z-20`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="inline-flex items-center mr-4 ">
            <div className="logo">
              <Lottie animationData={logoAnimation} />
            </div>
          </a>
        </Link>
        <ThemeChanger />

        <div className="block z-51 md:hidden text-6xl relative ">
          {showNav ? (
            <AiOutlineClose onClick={toggleSidebar} className="cursor-pointer" />
          ) : (
            <AiOutlineBars onClick={toggleSidebar} className="cursor-pointer" />
          )}
        </div>
      </div>

      <ul
        style={{ transition: 'all 0.9s ease-out' }}
        className={`
                " md:static fixed bottom-0 top-0 flex flex-col md:flex-row justify-center md:space-x-7 m-0 items-center md:bg-transparent  bg-frosted  md:w-auto w-full p-2"
                `}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            onClick={toggleSidebar}
            className={`${router.pathname == link.path ? 'after:w-[100%]' : ''} ${
              showNav ? 'fade' : ''
            } px-3 my-6 md:py-2 text-7xl md:text-3xl font-bold items-center justify-center text-transform: uppercase relative transition-all after:block after:bg-white after:absolute after:bottom-[-3px] after:content-[''] after:h-1 after:left-0 after:transition-all after:duration-500 after:w-0 hover:after:w-full`}
          >
            <Link href={link.path}>
              <a className="text-white hover:text-white">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;