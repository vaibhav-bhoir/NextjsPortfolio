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
      className="border-success  hover:border-white  border-2 hover:border-4 w-24 h-24 md:w-48 md:h-48 rounded-full flex flex-col justify-center items-center"
    >
      <div className="mt-1">
        <Image src={imageSrc} alt="icon" width={40} height={40} />
      </div>
      <h1 className="text-base lg:text-xl font-medium text-black">{name}</h1>
    </div>
  );
};

export default Circle;
