import React, { ReactNode } from 'react';
import Link from 'next/link';

export type CustomLinkProps = {
  url: string;
  color?: string;
  target?: string;
  download?: boolean;
  children: ReactNode;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  url,
  color = 'primary',
  target,
  children,
  download = false,
}) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="1000"
      href={url}
      target={target}
      download={download}
      className="relative inline-flex items-center justify-start px-5 py-2.5 md:px-7 md:py-4 uppercase shadow-shadow  lg:tracking-wide overflow-hidden font-medium transition-all bg-main-bg hover:bg-main-bg group"
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-bg absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span
        className={`relative flex items-center w-full text-left text-${color} transition-colors duration-300 ease-in-out group-hover:text-white`}
      >
        {children}
      </span>
    </Link>
  );
};

export default CustomLink;
