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
  color = 'success',
  className = '',
  target,
  children,
}) => {
  return (
    <Link href={url}>
      <a
        target={target}
        className={`${className} rounded-lg border-2 px-4 py-2 md:px-8 md:py-4 flex items-center justify-between  border-${color} text-${color} hover:bg-${color} hover:text-black dark:text-white dark:bg-darkblue dark:border-darkblue`}
        data-aos="fade-in"
        data-aos-delay={2000}
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
