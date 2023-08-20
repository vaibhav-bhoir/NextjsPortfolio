import React, { ReactNode } from 'react';
import Link from 'next/link';

export type CustomLinkProps = {
  url: string;
  color?: string;
  className?: string;
  target?: string;
  children: ReactNode;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  url,
  color = 'primary',
  className = '',
  target,
  children,
}) => {
  return (
    <Link href={url} legacyBehavior>
      <a
        target={target}
        className={`${className} bg-main-bg shadow-shadow text-base px-3.5 py-2.5 md:px-7 md:py-4 uppercase lg:tracking-wide
        flex items-center justify-between font-medium text-${color} hover:text-primary`}
        data-aos="fade-in"
        data-aos-delay={2000}
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
