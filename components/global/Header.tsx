import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
// import brandLogo from '../../public/images/brand-logo.svg'; // Adjust the path as necessary

export interface SiteLogo {
  fields?: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title: string;
  };
}

interface HeaderProps {
  siteLogo?: SiteLogo;
  mainNavigation: {
    fields: {
      label: string;
      link: string;
    };
  }[];
}

const Header: React.FC<HeaderProps> = ({ siteLogo, mainNavigation }) => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const { scrollDir, isScrolled } = useScrollDirection();

  useEffect(() => {
    document.body.classList.toggle('isOpen', showNav);
  }, [showNav]);

  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  if (!mainNavigation || mainNavigation.length === 0 || !siteLogo) {
    return null; // Return null if mainNavigation is not provided or empty
  }

  return (
    <header
      className={`${scrollDir === 'up' ? 'translate-y-0	' : ''} ${
        scrollDir === 'down' ? '-translate-y-36	' : ''
      }
      fixed top-4 lg:top-9 w-full p-4 md:px-7 md:py-0 z-[5]`}
      style={{ transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
    >
      <div
        className={`
    px-5 lg:px-10 rounded-[76px] md:flex justify-between bg-main-bg shadow-shadow items-center text-primary text-center
    transition-[background-color,width] ease-in-out duration-[0.45s]
    ${isScrolled ? 'xl:w-[1000px]' : 'w-full'}
    mx-auto
  `}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center mr-4 ">
            <div className="logo w-[125px] lg:w-[180px] h-auto">
              {siteLogo?.fields?.file?.url && (
                <Image
                  src={siteLogo.fields.file.url}
                  alt={siteLogo.fields.title || 'Site Logo'}
                  width={siteLogo.fields.file.details.image.width}
                  height={siteLogo.fields.file.details.image.height}
                />
              )}
            </div>
          </Link>

          <div className="block z-[6] md:hidden text-4xl relative h-[30px]">
            {showNav ? (
              <button type="button" onClick={toggleSidebar} className="cursor-pointer">
                <svg height="1em" width="1em">
                  <use xlinkHref="#close-menu" />
                </svg>
              </button>
            ) : (
              <button type="button" onClick={toggleSidebar} className="cursor-pointer">
                <svg height="1em" width="1em">
                  <use xlinkHref="#hamburger" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <ul
          style={{ transition: 'all 0.5s ease-out' }}
          className="md:static fixed bottom-0 flex flex-col md:flex-row justify-center gap-7 items-center md:bg-transparent bg-main-bg md:w-auto w-full p-2"
        >
          {mainNavigation.map((data, index) => {
            const field = data.fields;

            return (
              <li
                key={index}
                onClick={toggleSidebar}
                className={`${router?.asPath === field?.link ? 'active' : ''} ${
                  showNav ? 'fade' : ''
                } text-7xl md:text-lg font-semibold items-center justify-center text-transform: uppercase relative transition-all after:block after:bg-primary-bg after:absolute after:bottom-[-8px] after:content-[''] after:h-1 after:left-0 after:transition-all after:duration-500 after:w-0 hover:after:w-full`}
              >
                <Link href={field?.link} className="text-primary hover:text-primary">
                  {field?.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden xl:block text-7xl md:text-lg font-semibold  bg-primary-bg px-8 py-4 rounded-[76px] transition-all duration-500 ease-in-out hover:scale-105"
          style={{ color: 'var(--white)' }}
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
