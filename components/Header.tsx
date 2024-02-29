import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navLinks from '../public/data/header_data';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import brandLogo from '../public/icons/brand-logo.svg';
import useScrollDirection from '../hooks/useScrollDirection';
import Image from 'next/image';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const scrollDir = useScrollDirection();

  useEffect(() => {
    document.body.classList.toggle('isOpen', showNav);
  }, [showNav]);
  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <header
      className={`${scrollDir === 'up' ? 'translate-y-0	' : ''} ${
        scrollDir === 'down' ? '-translate-y-36	' : ''
      } fixed top-4 lg:top-9 w-full p-4 md:px-7 md:py-0 z-[5]`}
      style={{ transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
    >
      <div className="container px-5 lg:px-10 rounded-[76px] md:flex justify-between bg-main-bg shadow-shadow items-center text-primary text-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center mr-4 ">
            <div className="logo w-[125px] lg:w-[180px] h-auto">
              <Image src={brandLogo} alt="logo" className="" />
            </div>
          </Link>

          <div className="block z-[6] md:hidden text-4xl relative ">
            {showNav ? (
              <AiOutlineClose onClick={toggleSidebar} className="cursor-pointer" />
            ) : (
              <AiOutlineBars onClick={toggleSidebar} className="cursor-pointer" />
            )}
          </div>
        </div>

        <ul
          style={{ transition: 'all 0.5s ease-out' }}
          className={`
                " md:static fixed bottom-0 -top-4 flex flex-col md:flex-row justify-center gap-7 items-center md:bg-transparent  bg-main-bg   md:w-auto w-full p-2"
                `}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={toggleSidebar}
              className={`${router.pathname == link.path ? 'active' : ''} ${
                showNav ? 'fade' : ''
              } text-7xl md:text-lg font-semibold items-center justify-center text-transform: uppercase relative transition-all after:block after:bg-primary-bg after:absolute after:bottom-[-8px] after:content-[''] after:h-1 after:left-0 after:transition-all after:duration-500 after:w-0 hover:after:w-full`}
            >
              <Link href={link.path} className="text-primary hover:text-primary">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
