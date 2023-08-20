import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navLinks from '../public/data/header_data';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import Lottie from 'lottie-react';
import logoAnimation from '../public/animations/v-logo-animation-data.json';
// import useScrollDirection from '../hooks/useScrollDirection';


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const [scrollDir, setScrollDir] = useState("scrolling down");

  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.scrollY;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.scrollY;

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   console.log(scrollDir);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollDir]);



  useEffect(() => {
    document.body.classList.toggle('isOpen', showNav);

    // window.addEventListener('scroll', () => {
    //   setScroll(window.scrollY > 250);
    // });
  }, [showNav]);
  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <header
      className=
      {`${
        scrollDir === "scrolling down" ? "down" : "up"
      } fixed top-4 lg:top-9 w-full p-4 md:px-7 md:py-0 z-30`}
    >
      <div className="container px-5 lg:px-10 rounded-[76px] md:flex justify-between bg-main-bg shadow-shadow items-center text-primary text-center">

      <div className="flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="inline-flex items-center mr-4 ">
            <div className="logo w-[140px] lg:w-[180px] h-auto">
              <Lottie animationData={logoAnimation} />
            </div>
          </a>
        </Link>

        <div className="block z-51 md:hidden text-4xl relative ">
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
                " md:static fixed bottom-0 top-0 flex flex-col md:flex-row justify-center gap-7 items-center md:bg-transparent  bg-main-bg   md:w-auto w-full p-2"
                `}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            onClick={toggleSidebar}
            className={`${router.pathname == link.path ? 'after:w-[100%]' : ''} ${
              showNav ? 'fade' : ''
            } text-base md:text-lg font-semibold items-center justify-center text-transform: uppercase relative transition-all after:block after:bg-white after:absolute after:bottom-[-3px] after:content-[''] after:h-1 after:left-0 after:transition-all after:duration-500 after:w-0 hover:after:w-full`}
          >
            <Link href={link.path} legacyBehavior>
              <a className="text-primary hover:text-primary">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      </div>

    </header>
  );
};

export default Header;
