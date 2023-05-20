import React from 'react';
import Image from 'next/image';

interface CircleProps {
  data: {
    name: string;
    imageSrc: string;
  };
}

const Circle = ({ data }: CircleProps) => {
  const { name, imageSrc } = data;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className=" mx-4 md:mx-8 my-4 border-success dark:border-jaguar hover:border-white dark:hover:border-black border-2 hover:border-4 w-36 h-36 md:w-52 md:h-52 rounded-full flex flex-col justify-center items-center"
    >
      <div className="w-12 md:w-20">
        <Image src={imageSrc} alt="icon" width={50} height={50} />
      </div>
      <h1 className="text-2xl text-secondary-100 dark:text-black">{name}</h1>
    </div>
  );
};

export default Circle;
