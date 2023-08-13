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
  color = 'black',
  className = '',
  target,
  children,
}) => {
  return (
    <Link href={url}>
      <a
        target={target}
        className={`${className} bg-gradient-to-r from-primary to-secondary rounded-lg px-4 py-2 md:px-8 md:py-4 uppercase tracking-wide
        flex items-center justify-between text-${color} hover:text-black`}
        data-aos="fade-in"
        data-aos-delay={2000}
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
