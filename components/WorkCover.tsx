import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';

interface WorkProps {
  data: {
    name: string;
    github: string;
    link: string;
    tech: Array<any>;
  };
}

const WorkCover = ({ data }: WorkProps) => {
  const { name, github, tech, link } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="shadow-shadow bg-main-bg  rounded-xl p-4 transform transition-transform hover:scale-[1.02]"
    >
      <div className="justify-between items-center mx-2 flex">
        <div className="flex gap-2 mb-4">
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-primary rounded-full"></span>
          <span className="w-5 h-5 bg-secondary rounded-full"></span>
        </div>
        <div className="flex gap-3 mb-4">
          <p className="text-primary text-2xl cursor-pointer">
            {link && (
              <Link href={link} target="_blank">
                <AiOutlineLink />
              </Link>
            )}
          </p>
          <p className="text-primary text-2xl cursor-pointer">
            {github && (
              <Link href={github} target="_blank">
                <AiOutlineGithub />
              </Link>
            )}
          </p>
        </div>
      </div>
      <hr />
      <Link href={link} target="_blank">
        <h1 className="text-primary font-semibold text-xl my-4">{name}</h1>
      </Link>
      <div className="flex flex-wrap gap-3">
        {tech.map((e, index) => (
          <div
            key={index}
            className="px-4 py-1.5 bg-body-bg shadow-shadow  text-primary rounded-full"
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCover;
