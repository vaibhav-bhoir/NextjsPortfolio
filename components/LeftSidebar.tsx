import Link from 'next/link';
import React from 'react';
interface LeftSidebarProps {
  socialNavigation: {
    fields: {
      iconName: string;
      label?: string;
      link: string;
    };
  }[];
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ socialNavigation }) => {
  if (!socialNavigation || socialNavigation.length === 0) {
    return null;
  }

  return (
    <aside className="fixed bottom-14 right-4 z-[2] bg-main-bg shadow-shadow px-2 pt-2.5 pb-3.5 rounded-[24px]">
      <ul className=" flex gap-3 flex-col items-center ">
        {socialNavigation.map((data, index) => {
          const socialNav = data.fields;

          return (
            <li key={index}>
              <Link
                href={socialNav?.link}
                target="_blank"
                className="block text-primary-text text-2xl lg:text-3xl hover:-translate-y-2 transition ease-in-out hover:text-success "
              >
                <svg height="1em" width="1em">
                  <use xlinkHref={`#${socialNav.iconName}`} />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
