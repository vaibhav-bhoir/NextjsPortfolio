import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import Link from 'next/link';

interface socialIconsProps {
  id: number;
  icon: any;
  link: string;
}

const socialIcons: Array<socialIconsProps> = [
  {
    id: 1,
    icon: <AiOutlineGlobal />,
    link: 'https://vaibhav-bhoir.github.io/myportfolio/',
  },
  {
    id: 2,
    icon: <AiOutlineGithub />,
    link: 'https://github.com/vaibhav-bhoir',
  },
  {
    id: 3,
    icon: <AiOutlineLinkedin />,
    link: 'https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185',
  },
  {
    id: 4,
    icon: <AiOutlineMail />,
    link: 'mailto:bhoirvaibhav90@gmail.com',
  },
];

const LeftSidebar = () => {
  return (
    <aside className="fixed bottom-24 right-4 z-10 bg-light-black px-1 pt-2.5 pb-3.5 rounded-xl">
      <ul className=" flex gap-3 flex-col items-center ">
        {socialIcons.map((e) => (
          <li key={e.id}>
            <Link href={e.link} legacyBehavior>
              <a
                target="_blank"
                className="block text-primary text-2xl lg:text-3xl hover:-translate-y-2 transition ease-in-out hover:text-success "
              >
                {e.icon}
              </a>
            </Link>
          </li>
        ))}
        <div className="whatsapp flex justify-center items-center w-8 h-8 relative rounded-full shadow-lg bg-green-500 animate-up-down transition-all">
          <Link
            href="https://wa.me/+918975588567?text=Hi%20Vaibhav.%20I%27d%20like%20to%20chat%20with%20you"
            legacyBehavior
          >
            <a className="text-2xl text-white hover:text-white" target="_blank">
              <AiOutlineWhatsApp />
            </a>
          </Link>
        </div>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
