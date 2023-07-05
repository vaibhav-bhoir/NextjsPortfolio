import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import navLinks from '../public/data/header_data';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

const Navbar2 = () => {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.toggle('isOpen', showNav);

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 250);
    });
  }, [showNav]);

  useEffect(() => {
    const vIcon = document.getElementById('vIcon');
    const name = document.getElementById('name');
    const slogan = document.getElementById('slogan');

    const animations = [
      { element: vIcon, animationName: 'bounceInVIcon', duration: 2000 },
      { element: name, animationName: 'slideDownName', duration: 2500 },
      { element: slogan, animationName: 'slideDownSlogan', duration: 3000 },
    ];

    const pauseDuration = 3000; // Pause duration in milliseconds
    const startDelay = 2000; // Delay before starting animations in milliseconds
    let animationTimeout: any; // Variable to store the timeout
    let completedAnimations = 0; // Number of completed animations

    function playAnimation(element: any, animationName: string, duration: number) {
      element.style.animation = `${animationName} ${duration}ms ease-in-out`;
      animationTimeout = setTimeout(() => pauseAnimation(), duration);
    }

    function pauseAnimation() {
      completedAnimations++;
      if (completedAnimations === animations.length) {
        animations.forEach((animation) => {
          if (animation.element) {
            animation.element.style.animation = 'none';
          }
        });
        completedAnimations = 0; // Reset the completed animations count
        clearTimeout(animationTimeout); // Clear the timeout
        animationTimeout = setTimeout(startAnimations, pauseDuration); // Restart the animations after pause duration
      }
    }

    function startAnimations() {
      completedAnimations = 0; // Reset the completed animations count
      setTimeout(() => {
        animations.forEach((animation) =>
          playAnimation(animation.element, animation.animationName, animation.duration),
        );
      }, startDelay);
    }

    startAnimations(); // Start the animations initially
  }, []);

  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`${
        scroll ? 'navbar-shrink' : ''
      } fixed w-full md:flex justify-between items-center text-white text-center bg-frosted dark:bg-darkblue p-4 md:px-3 md:py-0 z-50`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="inline-flex items-center mr-4 ">
            <div className="logo">
              {/* <Image src={Logo} alt="brand-logo" width={200} height={96} /> */}
              <svg
                id="logo"
                data-v-6805eed4=""
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="96"
                viewBox="0 0 200.000000 96.000000"
                preserveAspectRatio="xMidYMid meet"
                colorInterpolationFilters="sRGB"
                style={{ margin: 'auto' }}
              >
                <rect
                  data-v-6805eed4=""
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="transparent"
                  fillOpacity="1"
                  className="background"
                ></rect>
                <g data-v-6805eed4="" className="iconmbgsvg" transform="translate(10,10)">
                  <g fill="#ffffff" hollow-target="textNormalTran">
                    <g transform="translate(33.829994201660156,0)">
                      <g id="vIcon">
                        <rect
                          fill="#ffffff"
                          fillOpacity="0"
                          strokeWidth="2"
                          x="0"
                          y="0"
                          width="112.5"
                          height="76.19886209699268"
                          className="image-rect"
                        ></rect>
                        <svg
                          x="0"
                          y="0"
                          width="112.5"
                          height="76.19886209699268"
                          className="image-svg-svg primary"
                          style={{ overflow: 'visible' }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 147.63999938964844 100"
                          >
                            <path
                              fill="#00476e"
                              d="M0 0l19.59 26.55L39.23 0H0zM109.01 0L54.43 73.73 73.79 100 147.64 0h-38.63z"
                            ></path>
                            <path
                              fill="#c30d23"
                              d="M54.25 0L27.07 36.7 46.9 63.58 93.95 0h-39.7z"
                            ></path>
                          </svg>
                        </svg>
                      </g>
                    </g>
                    <g transform="translate(0,14.656431198120117)">
                      <g data-gra="path-name" id="name">
                        <g>
                          <g>
                            <path
                              d="M23.95-28.79L23.95-28.79Q24.77-28.79 24.77-27.92L24.77-27.92Q24.77-27.48 24.5-26.9 24.23-26.33 24.07-25.97L24.07-25.97 13.1 1.11-0.18-28.57 10.84-28.57 17.26-13.47 21.77-24.73Q22.49-26.55 22.71-27.36 22.94-28.17 23.2-28.48 23.46-28.79 23.95-28.79ZM42.44 0L42.44-1.33Q39.86 0.38 36.71 0.38L36.71 0.38Q32.53 0.38 30-1.72L30-1.72Q27.38-3.88 27.38-7.71L27.38-7.71Q27.38-11.1 29.98-13.29L29.98-13.29Q32.65-15.49 36.99-15.49L36.99-15.49Q39.9-15.49 42.44-14.38L42.44-14.38 42.44-19.93Q40.6-20.45 39.2-20.45 37.8-20.45 36.83-20.33 35.86-20.21 34.99-19.97L34.99-19.97Q33.11-19.44 32.14-18.56L32.14-18.56Q31.58-18.03 31.11-18.03 30.65-18.03 30.41-18.26 30.16-18.49 30.16-18.78 30.16-19.06 30.27-19.29 30.37-19.52 30.65-19.77L30.65-19.77Q31.26-20.29 32.67-20.82L32.67-20.82Q35.6-21.93 38.54-21.93L38.54-21.93Q47.51-21.93 49.99-17.65L49.99-17.65Q51.08-15.75 51.08-12.66L51.08-12.66 51.08 0 42.44 0ZM42.44-3.07L42.44-12.8Q39.9-14.03 37.37-14.03L37.37-14.03Q36.97-14.03 36.61-13.97L36.61-13.97 36.61-1.13Q36.71-1.11 36.83-1.11 36.95-1.11 37.07-1.11L37.07-1.11Q39.84-1.11 42.44-3.07L42.44-3.07ZM61.64-25.1Q59.56-25.1 58.39-26.03 57.22-26.95 57.22-28.47L57.22-28.47Q57.22-29.74 58.51-30.65L58.51-30.65Q59.89-31.62 61.42-31.62 62.95-31.62 63.79-31.32 64.63-31.01 65.22-30.53L65.22-30.53Q66.39-29.54 66.39-28.23L66.39-28.23Q66.39-26.91 65.05-26.01L65.05-26.01Q63.72-25.1 61.64-25.1ZM57.4 0L57.4-21.56 66.08-21.56 66.08 0 57.4 0ZM86.42 0.38L86.42 0.38Q83.61 0.38 80.98-0.89L80.98-0.89 80.98 0 72.69 0 72.69-28.57 80.98-28.57 80.98-20.53Q83.55-21.93 86.36-21.93 89.16-21.93 91.28-21.1 93.4-20.27 94.92-18.82L94.92-18.82Q98.05-15.75 98.05-10.96L98.05-10.96Q98.05-6.14 94.96-2.95L94.96-2.95Q91.77 0.38 86.42 0.38ZM86.36-20.45L86.36-20.45Q83.37-20.45 80.98-18.8L80.98-18.8 80.98-2.6Q83.63-1.11 86.92-1.11L86.92-1.11 87.45-1.11Q87.69-1.11 87.91-1.15L87.91-1.15 87.91-20.33Q87.14-20.45 86.36-20.45ZM119.73-21.93L119.73-21.93Q126.84-21.93 126.84-15.02L126.84-15.02 126.84 0 118.16 0 118.16-19.65Q117.79-19.89 117.2-19.89 116.6-19.89 115.96-19.61 115.31-19.32 114.6-18.82L114.6-18.82Q113.09-17.71 111.92-16.03L111.92-16.03 111.92 0 103.23 0 103.23-28.57 111.92-28.57 111.92-18.15Q115.37-21.93 119.73-21.93ZM146.95 0L146.95-1.33Q144.36 0.38 141.21 0.38L141.21 0.38Q137.03 0.38 134.51-1.72L134.51-1.72Q131.89-3.88 131.89-7.71L131.89-7.71Q131.89-11.1 134.49-13.29L134.49-13.29Q137.16-15.49 141.5-15.49L141.5-15.49Q144.4-15.49 146.95-14.38L146.95-14.38 146.95-19.93Q145.11-20.45 143.71-20.45 142.3-20.45 141.33-20.33 140.37-20.21 139.5-19.97L139.5-19.97Q137.62-19.44 136.65-18.56L136.65-18.56Q136.09-18.03 135.62-18.03 135.16-18.03 134.91-18.26 134.67-18.49 134.67-18.78 134.67-19.06 134.77-19.29 134.87-19.52 135.16-19.77L135.16-19.77Q135.76-20.29 137.18-20.82L137.18-20.82Q140.1-21.93 143.05-21.93L143.05-21.93Q152.02-21.93 154.5-17.65L154.5-17.65Q155.59-15.75 155.59-12.66L155.59-12.66 155.59 0 146.95 0ZM146.95-3.07L146.95-12.8Q144.4-14.03 141.88-14.03L141.88-14.03Q141.48-14.03 141.11-13.97L141.11-13.97 141.11-1.13Q141.21-1.11 141.33-1.11 141.46-1.11 141.58-1.11L141.58-1.11Q144.34-1.11 146.95-3.07L146.95-3.07ZM169.58 0.91L158.5-21.56 167.64-21.56 173.14-10.24 176.59-17.1Q177.66-19.3 177.93-20.37 178.2-21.44 178.48-21.68 178.75-21.93 179.14-21.93 179.54-21.93 179.76-21.66 179.98-21.4 179.98-21.14 179.98-20.88 179.93-20.61 179.88-20.35 179.74-19.91L179.74-19.91Q179.43-19.08 178.47-17.04L178.47-17.04 169.58 0.91Z"
                              transform="translate(0.18000000715255737, 31.6200008392334)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        data-gra="path-slogan"
                        id="slogan"
                        fill="#57ec99"
                        transform="translate(5,38)"
                      >
                        <rect
                          x="0"
                          height="1"
                          y="3.580000400543213"
                          width="58.184993743896484"
                        ></rect>
                        <rect
                          height="1"
                          y="3.580000400543213"
                          width="58.184993743896484"
                          x="111.97499465942383"
                        ></rect>
                        <g transform="translate(61.184993743896484,0)">
                          <g transform="scale(1)">
                            <path
                              d="M2.71-7.03L2.71 0L3.72 0L3.72-7.03L6.10-7.03L6.10-7.87L0.34-7.87L0.34-7.03ZM7.51-7.87L7.51 0L12.17 0L12.17-0.85L8.51-0.85L8.51-3.71L11.50-3.71L11.50-4.56L8.51-4.56L8.51-7.03L12.05-7.03L12.05-7.87ZM13.38-3.94C13.38-3.30 13.47-2.72 13.64-2.21C13.81-1.71 14.05-1.28 14.36-0.93C14.67-0.58 15.03-0.32 15.45-0.13C15.87 0.05 16.33 0.14 16.82 0.14C17.33 0.14 17.78 0.04 18.17-0.16C18.56-0.36 18.91-0.64 19.22-1.00L18.66-1.61C18.40-1.33 18.13-1.11 17.85-0.96C17.57-0.81 17.23-0.73 16.85-0.73C16.47-0.73 16.13-0.81 15.83-0.96C15.53-1.11 15.28-1.33 15.07-1.61C14.86-1.89 14.70-2.23 14.59-2.62C14.47-3.02 14.41-3.46 14.41-3.96C14.41-4.45 14.47-4.89 14.59-5.28C14.71-5.67 14.88-6.01 15.10-6.28C15.31-6.56 15.57-6.77 15.88-6.92C16.18-7.07 16.52-7.14 16.90-7.14C17.23-7.14 17.53-7.07 17.78-6.94C18.03-6.81 18.26-6.63 18.47-6.41L19.03-7.04C18.80-7.30 18.50-7.53 18.14-7.72C17.78-7.92 17.36-8.02 16.88-8.02C16.38-8.02 15.91-7.92 15.49-7.73C15.06-7.55 14.69-7.28 14.38-6.92C14.06-6.57 13.82-6.14 13.64-5.64C13.47-5.14 13.38-4.57 13.38-3.94ZM20.69-7.87L20.69 0L21.68 0L21.68-3.71L25.34-3.71L25.34 0L26.35 0L26.35-7.87L25.34-7.87L25.34-4.57L21.68-4.57L21.68-7.87ZM28.06-3.94C28.06-3.30 28.14-2.72 28.32-2.21C28.50-1.71 28.74-1.28 29.05-0.93C29.36-0.58 29.74-0.32 30.17-0.13C30.60 0.05 31.08 0.14 31.60 0.14C32.12 0.14 32.60 0.06 33.02-0.11C33.44-0.29 33.78-0.50 34.03-0.77L34.03-4.08L31.45-4.08L31.45-3.25L33.12-3.25L33.12-1.20C32.96-1.06 32.75-0.94 32.50-0.86C32.25-0.77 31.98-0.73 31.70-0.73C31.28-0.73 30.91-0.81 30.58-0.96C30.26-1.11 29.99-1.33 29.77-1.61C29.55-1.89 29.38-2.23 29.26-2.62C29.15-3.02 29.09-3.46 29.09-3.96C29.09-4.45 29.15-4.89 29.27-5.28C29.40-5.67 29.57-6.01 29.80-6.28C30.02-6.56 30.29-6.77 30.61-6.92C30.93-7.07 31.29-7.14 31.69-7.14C32.09-7.14 32.42-7.07 32.68-6.93C32.94-6.79 33.17-6.62 33.37-6.41L33.94-7.04C33.70-7.28 33.41-7.51 33.04-7.71C32.68-7.91 32.22-8.02 31.68-8.02C31.15-8.02 30.67-7.92 30.23-7.73C29.79-7.55 29.41-7.28 29.08-6.92C28.76-6.57 28.51-6.14 28.33-5.64C28.15-5.14 28.06-4.57 28.06-3.94ZM35.88-7.87L35.88-3.25C35.88-2.62 35.95-2.09 36.10-1.66C36.24-1.22 36.44-0.87 36.69-0.61C36.94-0.34 37.24-0.15 37.59-0.03C37.94 0.09 38.31 0.14 38.71 0.14C39.11 0.14 39.48 0.09 39.83-0.03C40.17-0.15 40.47-0.34 40.72-0.61C40.97-0.87 41.17-1.22 41.32-1.66C41.46-2.09 41.53-2.62 41.53-3.25L41.53-7.87L40.57-7.87L40.57-3.23C40.57-2.76 40.52-2.36 40.43-2.04C40.33-1.72 40.20-1.46 40.03-1.27C39.86-1.08 39.67-0.94 39.44-0.86C39.22-0.77 38.98-0.73 38.71-0.73C38.46-0.73 38.22-0.77 37.99-0.86C37.77-0.94 37.57-1.08 37.41-1.27C37.25-1.46 37.12-1.72 37.02-2.04C36.92-2.36 36.88-2.76 36.88-3.23L36.88-7.87ZM44.76-3.05L44.76 0L45.77 0L45.77-3.05L48.13-7.87L47.09-7.87L46.08-5.65C45.96-5.36 45.83-5.08 45.70-4.80C45.56-4.52 45.42-4.23 45.29-3.94L45.24-3.94C45.10-4.23 44.98-4.52 44.86-4.80C44.74-5.08 44.61-5.36 44.48-5.65L43.46-7.87L42.40-7.87Z"
                              transform="translate(-0.336, 8.016)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <defs v-gra="od"></defs>
              </svg>
            </div>
          </a>
        </Link>

        <div className="text-5xl">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-16 w-16 md:hidden flex items-center"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <MdDarkMode /> : <MdOutlineWbSunny />}
          </button>
        </div>

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
                " md:static fixed bottom-0 top-0 flex flex-col md:flex-row justify-center md:space-x-7 m-0 items-center md:bg-transparent md:dark:bg-transparent bg-frosted dark:bg-darkblue md:w-auto w-full p-2"
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
        <div className="text-3xl">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-12 w-12 hidden md:flex items-center"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <MdDarkMode /> : <MdOutlineWbSunny />}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar2;
